const quer = 1

class Manager {
    constructor() {

    }

    executer(query, callback) {
        console.log(query)
        callback(query)
    }
}

const manager = new Manager();


manager.executer(3, (e) => {
    console.log(e)
})
