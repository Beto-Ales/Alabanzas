import songsBook from './data/songsBook.js'

// variable iterate lyrics[] to show different verses of the song
let verse = 0;
const zeroVerse = () => {
  verse = 0
}
const plusVerse = () => {
  ++verse
}
const minusVerse = () => {
  --verse
}

// variable indexes differents songs
let song = 1;
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


// programm starts here
// --------------------

import { loadLyrics, arrowDown, arrowLeft, arrowRight, arrowUp } from './functionality/loadLyrics.js'

// check if should be load the songsBook or the playlist obj ***
loadLyrics(songsBook, true, false, verseContainer, song, verse, keyContainer, 'lyrics')

// event listeners commands
// ------------------------
document.addEventListener('keydown', function(){

  switch (event.key) {
    case 'ArrowRight':
      arrowRight(songsBook, verseContainer, song, keyContainer, plusSong, zeroVerse)
      break;
    
    case 'ArrowLeft':
      arrowLeft(songsBook, verseContainer, song, keyContainer, minusSong, zeroVerse)
      break;

    case 'ArrowDown':
      arrowDown(songsBook, verseContainer, song, verse, keyContainer, plusVerse, 'lyrics')
      break;
    
    case 'ArrowUp':
      arrowUp(songsBook, verseContainer, song, verse, keyContainer, minusVerse)
      break;

    case 'k':
      keyContainer.classList.toggle('showHide')
      break;
  
    default:
      break;
  }

})


// before github
// ------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------

// variable to choose between different playlists
// let songsList = songsBook


// --------------------------------------------
// songs book selector obj with setter & getter
//      const songsBookPicker = {

//        list: songsBook,

//        set selectSongBook(songBook) {
//          this.list = songBook
//        },

//        get list() {return this.list}

//      }
// --------------------------------------------
  

// -------------------
// song ordered by key
// console.log(songsBook[1]['key'], songsBook[2]['key'], songsBook[3]['key']);
// ---------------------------------------------------------------

//   info

// javascript use dynamic object property

    // https://www.codegrepper.com/code-examples/javascript/javascript+use+dynamic+object+property

// The 3 ways to access the object value

    // https://www.samanthaming.com/tidbits/37-dynamic-property-name-with-es6/

// A Full List of Key Event Values

    // https://www.freecodecamp.org/news/javascript-keycode-list-keypress-event-key-codes/

// Fitting Text to a Container

    // https://css-tricks.com/fitting-text-to-a-container/

// Font scaling based on width of container

    // https://stackoverflow.com/questions/16056591/font-scaling-based-on-width-of-container
