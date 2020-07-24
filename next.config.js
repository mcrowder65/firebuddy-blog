// next.config.js
const withMDX = require("@next/mdx")({
  extension: /\.mdx|.md?$/,
})
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx", "md"],
})
