const BABYLON = require('babylon')
const Traverse = require('babel-traverse').default
const T = require('babel-types')
const generator = require('babel-generator').default
const fs = require('fs')
const path = require('path')
// import FUNCTION from './source/function.js'
let str = "/* 测试 */ function def (name) {console.log(name)}"
let test = `if(name == 111 && Date.now > new Date('2019/04/12 08:00:00')) {consoel.log('yes')} else if(name!=333){console.log('no')} `

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
output.code = output.code.replace(/\;/g, '')

fs.writeFile(path.join(__dirname, './out.js'), outPut.code, {encoding: 'utf-8'},err => {
    console.log(err)
})


function trans ({type: t}) {
    return {
        visitor: {
            BinaryExpression (path) {
                if (path.node.operator === '===') {
                    return
                }
                path.node.left = t.identifier("xiaomi")
                path.node.right = t.identifier('didi')
            }
        }
    }
}
