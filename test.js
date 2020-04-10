const Spritesmith = require('spritesmith');
const fs = require('fs')
const path = require('path')

const sprites = ['./loaders/images/1.jpg', './loaders/images/2.jpg']
/**
 * 合成雪碧图
 */
Spritesmith.run({src: sprites}, (err, result) => {
  console.log(result.image);
  console.log(result.coordicates)
  console.log(result.properties);
  fs.writeFileSync(path.join(__dirname, 'dist/sprite.jpg'), result.image)
})