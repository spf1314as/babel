"use strict"

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function") } }

function _defineProperties(target, props) { for (var i = 0 i < props.length i++) { var descriptor = props[i] descriptor.enumerable = descriptor.enumerable || false descriptor.configurable = true if ("value" in descriptor) descriptor.writable = true Object.defineProperty(target, descriptor.key, descriptor) } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps) if (staticProps) _defineProperties(Constructor, staticProps) return Constructor }

var game = function game(_) {
  var name = 'didi'
  console.log(name)

  if (name !== '') {
    obj.show()
  }
}

var obj = {
  name: 'didi',
  show: function show() {
    console.log(this.name)
  }
}

var Game =
/*#__PURE__*/
function () {
  function Game() {
    _classCallCheck(this, Game)

    this.name = 'didi'
  }

  _createClass(Game, [{
    key: "showName",
    value: function showName() {
      console.log(this.name)
    }
  }, {
    key: "year",
    get: function get() {
      if (this.name === 'didi') return 8
      return new Date().getFullYear()
    }
  }])

  return Game
}()