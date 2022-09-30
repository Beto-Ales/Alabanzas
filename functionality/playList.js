// start/stop a new playlist
    // event listener

// let playlistActive = false       (this state should be in script.js)

// ---

// create playlist
// const playlist = new Map()
const playlist = {}

// add song to playlist
const add = (song, id, playlistActive) => {
    if (playlistActive) {
        // playlist.set(id, song.lyrics)
        playlist[`${id}`] = {lyrics: song.lyrics}
    }
}

// remove song from playlist
const remove = (song, id, playlistActive) => {
    if (playlistActive) {
        playlist.delete(id)
    }
}

// when new playlist  is active
    // add/remove songs to playlist based on song id
        // event listener

// show list of songs



export {
    playlist,
    add,
    remove,
}