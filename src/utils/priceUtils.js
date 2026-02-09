function parsePrice(text) {
  // Examples on site: "Rs. 500", "Rs. 1000"
  const digits = (text || "").replace(/[^\d]/g, "");
  return digits ? Number(digits) : null;
}

module.exports = { parsePrice };
