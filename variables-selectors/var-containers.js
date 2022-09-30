// variable iterate lyrics[] to show different verses of the song
let verse = 0;

// variable indexes differents songs
let song = 1;

// setters
const plusVerse = () => {
    ++verse
}

const minusVerse = () => {
    --verse
}

const verseZero = () => {
    verse = 0
}

const plusSong = () => {
    ++song
}

const minusSong = () => {
    --song
}

// containers order in html matters!!!
// -----------------------------------

// container for the key of the song
const keyContainer = document.querySelector('#key')

// container for the verse of the song
const verseContainer = keyContainer.nextElementSibling

// div container for dots indicating verse
const verseDotsContainer = verseContainer.nextElementSibling

// -----------------------------------
// containers order in html matters!!!

export {
    verse,
    song,
    plusSong,
    minusSong,
    plusVerse,
    minusVerse,
    verseZero,
    keyContainer,
    verseContainer,
    verseDotsContainer,
}