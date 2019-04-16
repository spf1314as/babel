

module.exports = function({types: t, version}) { //arguments > [babel, params, cwd]
    return {
        visitor: { // this {opts, cwd, filename} // [plugins, {}]
            BinaryExpression(path, state) { // state transform 中的的参数 _map', 'key', 'file', 'opts', 'cwd', 'filename' 
                if (t.isBinaryExpression(path.node, {operator: '=='})) {
                    path.node.operator = '==='
                    console.dir(this.opts)  // 使用插件时的参数
                    console.log(this.cwd) // 执行目录
                    console.log(this.filename) // babel transform 的文件
                    console.log('+++++++++++++++')
                } 
                if (t.isBinaryExpression(path.node, {operator: '!='})) {
                    path.node.operator = '!=='
                }
              }
        }
    }
}