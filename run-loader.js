const { runLoaders } = require('loader-runner')

const fs = require('fs')
const path = require('path')

runLoaders({
  resource: './loaders/index.css',
  loaders: [path.join(__dirname, './loaders/sprite-loader.js')],
  readResource: fs.readFile.bind(fs)
}, (err, result) => {
  err ? console.error(err) : console.log(result)
})
