import ListArray from "./list";

// const beto = new ListArray()

const betoArray = new ListArray()

betoArray.addSong('0', 'beto arr')
betoArray.addSong('1', 'beto arr')
betoArray.addSong('2', 'beto arr')

betoArray.removeSong(1)

console.log(betoArray.songs)
console.log(betoArray.songs[0])