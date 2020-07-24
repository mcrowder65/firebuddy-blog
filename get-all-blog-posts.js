const preval = require("babel-plugin-preval/macro")

module.exports = preval`
  const fs = require('fs')
  const val = fs.readdirSync('content', 'utf8')
  module.exports = val
`
