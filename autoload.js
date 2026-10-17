const fs = require('fs').promises;
const path = require('path');
const chalk = require('chalk');

let isAutoLoadRunning = false;
let isShuttingDown = false;

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

process.on('message', (msg) => {
  if (msg === 'shutdown') {
    console.log(chalk.yellow('🛑 Received PM2 shutdown signal'));
    isShuttingDown = true;
  }
});

process.on('SIGINT', () => {
  console.log(chalk.yellow('🛑 Received SIGINT signal'));
  isShuttingDown = true;
});

process.on('SIGTERM', () => {
  console.log(chalk.yellow('🛑 Received SIGTERM signal'));
  isShuttingDown = true;
});

// Helper function to process a single user
async function processUser(user, index, total) {
  if (isShuttingDown) {
    throw new Error('Shutdown in progress');
  }
  
  console.log(chalk.blue(`⌛ Connecting ${index + 1}/${total}: ${user}`));
  
  const startpairing = require('./pair');
  await startpairing(user);
  
  // Clean up require cache for this specific user
  delete require.cache[require.resolve('./pair')];
  
  console.log(chalk.green(`✅ Connected: ${user}`));
  return user;
}

// Helper function to process users in batches
async function processBatch(users, batchSize = 10) {
  const results = [];
  
  for (let i = 0; i < users.length; i += batchSize) {
    if (isShuttingDown) {
      console.log(chalk.yellow('⏹️ Stopping batch processing due to shutdown'));
      break;
    }
    
    const batch = users.slice(i, i + batchSize);
    console.log(chalk.cyan(`🔄 Processing batch ${Math.floor(i / batchSize) + 1} (${batch.length} users)`));
    
    const batchPromises = batch.map((user, index) => 
      processUser(user, i + index, users.length)
        .catch(error => {
          console.log(chalk.red(`❌ Failed for ${user}: ${error.message}`));
          return { user, error: error.message };
        })
    );
    
    const batchResults = await Promise.allSettled(batchPromises);
    results.push(...batchResults);
    
    // Small delay between batches to prevent overwhelming the system
    if (i + batchSize < users.length && !isShuttingDown) {
      await delay(1000);
    }
  }
  
  return results;
}

module.exports = {
  autoLoadPairs: async (options = {}) => {
    if (isShuttingDown) {
      console.log(chalk.yellow('⚠️ Skipping auto-load (shutdown in progress)'));
      return;
    }
    
    if (isAutoLoadRunning) {
      console.log(chalk.yellow('⚠️ Auto-load already in progress. Skipping...'));
      return;
    }
    
    isAutoLoadRunning = true;
    console.log(chalk.yellow('🔄 Auto-loading all paired users...'));

    try {
      const pairingDir = path.join(__dirname, 'richstore', 'pairing');
      
      try {
        await fs.access(pairingDir);
      } catch {
        console.log(chalk.red('❌ Pairing directory not found.'));
        return;
      }

      const files = await fs.readdir(pairingDir, { withFileTypes: true });
      const pairUsers = files
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)
        .filter(name => name.endsWith('@s.whatsapp.net'));

      if (pairUsers.length === 0) {
        console.log(chalk.yellow('ℹ️ No paired users found.'));
        return;
      }

      console.log(chalk.green(`✅ Found ${pairUsers.length} users. Starting concurrent connections...`));

      const startTime = Date.now();
      
      // Option 1: Process all at once (fastest but resource intensive)
      if (options.concurrent === true) {
        console.log(chalk.cyan('🚀 Processing all users concurrently...'));
        
        const promises = pairUsers.map((user, index) => 
          processUser(user, index, pairUsers.length)
            .catch(error => {
              console.log(chalk.red(`❌ Failed for ${user}: ${error.message}`));
              return { user, error: error.message };
            })
        );
        
        const results = await Promise.allSettled(promises);
        
        // Count successful connections
        const successful = results.filter(result => 
          result.status === 'fulfilled' && typeof result.value === 'string'
        ).length;
        
        console.log(chalk.green(`✅ Processed ${successful}/${pairUsers.length} users successfully`));
        
      } else {
        // Option 2: Process in batches (balanced approach)
        const batchSize = options.batchSize || 10;
        console.log(chalk.cyan(`🔄 Processing users in batches of ${batchSize}...`));
        
        const results = await processBatch(pairUsers, batchSize);
        
        // Count successful connections
        const successful = results.filter(result => 
          result.status === 'fulfilled' && typeof result.value === 'string'
        ).length;
        
        console.log(chalk.green(`✅ Processed ${successful}/${pairUsers.length} users successfully`));
      }
      
      const endTime = Date.now();
      const duration = ((endTime - startTime) / 1000).toFixed(2);
      console.log(chalk.green(`🎉 All paired users processed in ${duration} seconds`));
      
    } catch (error) {
      console.error(chalk.red('❌ Auto-load error:'), error);
    } finally {
      isAutoLoadRunning = false;
    }
  }
};