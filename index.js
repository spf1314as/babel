const BABYLON = require('babylon')
const Traverse = require('babel-traverse').default
const T = require('babel-types')
const generator = require('babel-generator').default
const fs = require('fs')
const path = require('path')

let file = `${__dirname}/src/source/let.js`
let fileName = path.basename(`${__dirname}/src/source/let.js`)
let test = fs.readFileSync(file, {encoding: 'utf8'})

let result = BABYLON.parse(test, {
    sourceType: 'module'
})

Traverse(result, {
    enter (path) {
        if (T.isProgram(path)) {
           path.node.body.forEach(function(item){
                if(T.isIfStatement(item)) {
                    if( T.isBinaryExpression(item.test, {operator: '=='})){
                        item.test.operator = '==='
                    } else if(T.isBinaryExpression(item.test, {operator: '!='})) {
                        item.test.operator = '!=='
                    }
                    if (T.isIfStatement(item.alternate)){
                        if(T.isBinaryExpression(item.alternate.test, {operator: '=='})) {
                            item.alternate.test.operator = '==='
                        } else if(T.isBinaryExpression(item.alternate.test, {operator: '!='})){
                            item.alternate.test.operator = '!=='
                        }
                    }
                }
           })
           console.log('loop end **********')
        }
    },
    exit (path) {
    }
})

let outPut = generator(result, {
    comment: true, 
    quotes: 'double', 
    retainLines: true,
    sourceType: true
})
console.dir(outPut)

outPut.code = outPut.code.replace(/\;/g, '')
fs.writeFile(path.join(__dirname, `./src/out_${fileName}`), outPut.code, {encoding: 'utf-8'}, err => {
    console.log(err)
})
