module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    })
    // config.module.rules.push({
    //   test: /\.md$/,
    //   loader: "frontmatter-markdown-loader",
    //   options: { mode: ["react-component"] },
    // })
    return config
  },
}
