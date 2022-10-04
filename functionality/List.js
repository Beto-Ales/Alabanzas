// https://bobbyhadz.com/blog/javascript-get-key-of-object-by-index

// if Map, add title to each song & use it as key value pair

class List {
    constructor() {
        this.id = 1
        this.active = false
        this.songs = {}
    }
    addSong(key, lyrics) {
        this.songs[this.id] = {key: key, lyrics: lyrics}
        ++this.id
        console.log(this.id);
    }
    removeSong(id) {
        delete this.songs[id]
        --this.id
    }
    activateList() {
        this.active = !this.active
    }
}

// const beto = new List()

// beto.activateList()
// console.log('true', beto.active)
// beto.activateList()
// console.log('false', beto.active)

// console.log(beto)

// beto.addSong('A', 'beto')
// beto.addSong('A', 'beto')
// beto.addSong('A', 'beto')
// beto.activateList()
// console.log('true', beto.active)
// beto.activateList()
// console.log('false', beto.active)

// console.log(beto)

// beto.removeSong(1)

// console.log(beto)

// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------

class ListMap {
    constructor() {
        this.id = 1
        this.active = false
        this.songs = new Map()
    }
    addSong(key, lyrics) {
        this.songs.set(this.id, {key: key, lyrics: lyrics})
        ++this.id        
    }
    removeSong(id) {
        delete this.songs[id]        
    }
    activateList() {
        this.active = !this.active
    }
}

// const betoMap = new ListMap()

// betoMap.addSong('0', 'beto map')
// betoMap.addSong('1', 'beto map')
// betoMap.addSong('2', 'beto map')

// const mapIter = betoMap.songs.entries()

// console.log(mapIter.next())
// console.log(mapIter.next())
// console.log(mapIter.next())
// console.log(mapIter)


// console.log(betoMap.songs[Symbol.iterator]()[0])
// console.log(betoMap.songs.entries().next().value)

// betoMap.songs.

// this implementation requires to change the way
// the songs are indexed. 0 based
// check hte loops & conditions ex: if songs < array.length

export default class ListArray {
    constructor() {
        this.active = false
        this.songs = []
    }
    addSong(key, lyrics) {
        this.songs.push( {key: key, lyrics: lyrics} )
    }
    removeSong(id) {
        this.songs.splice(id, 1)
    }
    activateList() {
        this.active = !this.active
    }
}

// const betoArray = new ListArray()

// betoArray.addSong('0', 'beto arr')
// betoArray.addSong('1', 'beto arr')
// betoArray.addSong('2', 'beto arr')

// betoArray.removeSong(1)

// console.log(betoArray.songs)
// console.log(betoArray.songs[0])