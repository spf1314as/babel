const core = require('@babel/core')
const parser = require('@babel/parser')
const generator = require('@babel/generator')
const t = require('@babel/types')
const traverse = require('@babel/traverse')
const fs = require('fs')
const path = require('path')
const myPlugin = require('./plugin.js')


function getCode () {
    core.transformFileAsync(`${__dirname}/src/source/function.js`,
    {
        ast: true, // 编译后返回ast
        code: true, // 编译后获取string
        filename: 'function.js',
        plugins: [
            [myPlugin, {
                name: 'haha',
                year: 8
            }]
        ]
    }
    ).then(result => {
        result.code = result.code.replace(/\;/g, '')
        fs.writeFile(path.join(__dirname, `./src/out_function.js`), result.code, {encoding: 'utf-8'}, err => {
            console.log(err)
        })
    }).catch(err => console.log(err))
}
// getCode()
function getAst() {
    let fileName = 'function.js'
    let source = fs.readFileSync(`./src/source/function.js`, 'utf8')
    core.transformAsync(source,
    {
        ast: true, // 编译后返回ast
        code: false, // 编译后获取string
        filename: fileName
    }
    ).then(({ast}) => {
        console.log('===============')
       let {code, map} = core.transformFromAstSync(ast, source, {
            filename: fileName,
            babelrc: false,
            configFile: false,
            presets: ['minify'],
            sourceMaps: true // 生成sourceMaps boolean | inline | both
        })
        console.log('**************')
        console.log(map)
        fs.writeFile(path.join(__dirname, `./src/out_function.js`), code, {encoding: 'utf-8'}, err => {
            console.log(err)
        })
    }).catch(err => console.log(err))
}
getCode()



