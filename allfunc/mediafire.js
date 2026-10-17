const axios = require("axios");
const cheerio = require("cheerio");
const mime = require("mime-types");

/**
 * MediaFire Downloader (Multi-Pattern Fix)
 * @param {string} url
 */
async function mediafireDl(url) {
  try {
    const res = await axios.get(url, {
      headers: { "User-Agent": "Mozilla/5.0" }, // avoid bot block
    });
    const $ = cheerio.load(res.data);

    // Try standard button
    let link = $("a#downloadButton").attr("href");

    // Fallback: Look for <a> with "download" text
    if (!link || link.startsWith("javascript")) {
      link = $('a[href*="download"]').attr("href");
    }

    // Fallback 2: Regex search in HTML
    if (!link || link.startsWith("javascript")) {
      const match = res.data.match(/href="(https:\/\/download[^"]+)"/);
      if (match) link = match[1];
    }

    if (!link || link.startsWith("javascript")) {
      throw new Error("❌ Failed to extract MediaFire download link. (Layout changed?)");
    }

    // File name and size
    const fileName = $("div.filename").text().trim() || link.split("/").pop();
    const fileSize =
      $("a#downloadButton").text().match(/\((.*?)\)/)?.[1] ||
      $("li:contains('File size')").text().replace("File size:", "").trim() ||
      "Unknown Size";

    return {
      url: link,
      filename: fileName,
      filesize: fileSize,
      ext: fileName.split(".").pop(),
      mime: mime.lookup(fileName) || "application/octet-stream",
    };
  } catch (err) {
    console.error("MediaFire Scraper Error:", err.message);
    throw new Error("❌ MediaFire link invalid or site layout changed.");
  }
}

module.exports = { mediafireDl };
