let game = _ => {
    let name = 'didi'
    console.log(name)
    if(name != '') {
        obj.show()
    }
}

let obj = {
    name: 'didi',
    show () {
        console.log(this.name)
    }
}
class Game {
    constructor(){
        this.name = 'didi'
    }
    get year() {
        if (this.name == 'didi') return 8
        return new Date().getFullYear()
    }
    showName() {
        console.log(this.name)
    }
}