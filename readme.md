# babel ex
## index.js
    使用 babylon babel-traverse babel-types babel-generator 编译，遍历，生成代码
## babel.js
    使用 @babel/code, parser 进行代码编译 
## plugin.js
    自定义的babel插件
``` javascript
module.exports = function (babel) {
    /* babel {} 
  'File',
  'buildExternalHelpers',
  'resolvePlugin',
  'resolvePreset',
  'version',
  'getEnv',
  'tokTypes',
  'traverse',
  'template',
  'createConfigItem',
  'loadPartialConfig',
  'loadOptions',
  'transform',
  'transformSync',
  'transformAsync',
  'transformFile',
  'transformFileSync',
  'transformFileAsync',
  'transformFromAst',
  'transformFromAstSync',
  'transformFromAstAsync',
  'parse',
  'parseSync',
  'parseAsync',
  'DEFAULT_EXTENSIONS',
  'OptionManager',
  'types',
  'cache',
  'env',
  'async',
  'caller' */
    return {
        visitor: {
            // this {opts, cwd, filename} // [plugins, {name: 222, age: 999}] this.opts.name > 222
            BinaryExpression(path, state) { // state transform 中的的参数 _map', 'key', 'file', 'opts', 'cwd', 'filename' 

            }

        }
    }
}

```