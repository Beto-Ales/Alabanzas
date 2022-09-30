// import { 
//     verse,
//     song,
//     plusSong,
//     minusSong,
//     plusVerse,
//     minusVerse,
//     verseZero,
//     keyContainer,
//     verseContainer,
//     verseDotsContainer, 
// } from '../variables-selectors/var-containers.js'

// import { songsBook } from '../data/songsBook.js'

// const dots = (songsBook, changeSong, keyUp) => {

//   if (changeSong) {
   
//     // remove previous dots
//     while (verseDotsContainer.firstChild) {
//       verseDotsContainer.removeChild(verseDotsContainer.firstChild);
//     }

//     // set dots for the song verse
//     for(let i = 0; i < songsBook[song]['lyrics'].length; ++i ){
//         let dot = document.createElement("span")
//         dot.setAttribute("class", `dot dot${i}`)
//         verseDotsContainer.appendChild(dot)
//     }
    
//   }

//   // color the dot
//   // const colored = document.querySelector(`.dot${internalVerse}`)
//   const colored = document.querySelector(keyUp ? `.dot${verse + 1}` : `.dot${verse}`)
//   colored.classList.toggle("colored")

// }

// const loadLyrics = (songsBook, changeSong, keyUp) => {

//   // set first song
//   verseContainer.innerHTML = songsBook[song]['lyrics'][verse]

//   // set key of the song
//   keyContainer.innerHTML = songsBook[song]['key']

//   // set verse dots
//   dots(songsBook, changeSong, keyUp)

//   console.log(verse, song)

// }

// const arrowRight = () => {

//   if (event.key === 'ArrowRight' && Object.keys(songsBook).length - 1 > song) {
  
//     // start a new song with the first verse
//     verseZero

//     // next song
//     plusSong

//     loadLyrics(songsBook, true, false)
    
//   }

// }

// const arrowLeft = () => {

//   if (event.key === 'ArrowLeft' && song > 1) {
    
//     // start a new song with the first verse
//     verseZero
    
//     // prevoius song
//     minusSong

//     loadLyrics(songsBook, true, false)

//   }

// }

// const arrowDown = () => {

//   if (event.key === 'ArrowDown' && songsBook[song]['lyrics'].length - 1 > verse) {
    
//     // next verse
//     plusVerse

//     loadLyrics(songsBook, false, false)

//   }

// }

// const arrowUp = () => {

//   if (event.key === 'ArrowUp' && verse > 0) {
    
//     // previous verse
//     minusVerse

//     loadLyrics(songsBook, false, true)

//   }
  
// }

// const keyShow = () => {

//   // press k
//   if (event.key === 'k') {
        
//     keyContainer.classList.toggle('showHide')

//   }
  
// }

// export {
//     loadLyrics,
//     arrowRight,
//     arrowLeft,
//     arrowDown,
//     arrowUp,
//     keyShow,
// }

// -------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------

const dots = (songsBook, changeSong, keyUp, song, verse, lyrics) => {

  if (changeSong) {
   
    // remove previous dots
    while (verseDotsContainer.firstChild) {
      verseDotsContainer.removeChild(verseDotsContainer.firstChild);
    }

    // set dots for the song verse
    for(let i = 0; i < songsBook[song][lyrics].length; ++i ){
        let dot = document.createElement("span")
        dot.setAttribute("class", `dot dot${i}`)
        verseDotsContainer.appendChild(dot)
    }
    
  }

  // color the dot
  // const colored = document.querySelector(`.dot${internalVerse}`)
  const colored = document.querySelector(keyUp ? `.dot${verse + 1}` : `.dot${verse}`)
  colored.classList.toggle("colored")

}

const loadLyrics = (songsBook, changeSong, keyUp, verseContainer, song, verse, keyContainer, lyrics) => {

  // set first song
  verseContainer.innerHTML = songsBook[song][lyrics][verse]

  // set key of the song
  keyContainer.innerHTML = songsBook[song]['key']

  // set verse dots
  dots(songsBook, changeSong, keyUp, song, verse, lyrics)

}

const arrowRight = (songsBook, verseContainer, song, keyContainer, plusSong, zeroVerse) => {

  if (Object.keys(songsBook).length > song) {
  
    // start a new song with the first verse
    const verseIndex = 0
    zeroVerse()

    // next song
    // ++song
    plusSong()
    let songIndex = song
    ++ songIndex

    // loadLyrics(songsBook, true, false)
    loadLyrics(songsBook, true, false, verseContainer, songIndex, verseIndex, keyContainer, 'lyrics')
    
  }

}

const arrowLeft = (songsBook, verseContainer, song, keyContainer, minusSong, zeroVerse) => {

  if (song > 1) {
    
    // start a new song with the first verse
    const verseIndex = 0
    zeroVerse()
    
    // prevoius song
    // --song
    minusSong()
    let songIndex = song
    --songIndex

    // loadLyrics(songsBook, true, false)
    loadLyrics(songsBook, true, false, verseContainer, songIndex, verseIndex, keyContainer, 'lyrics')

  }

}

const arrowDown = (songsBook, verseContainer, song, verse, keyContainer, plusVerse, lyrics) => {

  if (songsBook[song][lyrics].length - 1 > verse) {
    
    // next verse
    let verseIndex = verse
    ++verseIndex
    plusVerse()    

    // loadLyrics(songsBook, false, false)
    loadLyrics(songsBook, false, false, verseContainer, song, verseIndex, keyContainer, 'lyrics')

  }

}

const arrowUp = (songsBook, verseContainer, song, verse, keyContainer, minusVerse) => {

  if (verse > 0) {
    
    // previous verse
    let verseIndex = verse
    --verseIndex
    minusVerse()

    // loadLyrics(songsBook, false, true)
    loadLyrics(songsBook, false, true, verseContainer, song, verseIndex, keyContainer, 'lyrics')

  }
  
}

export {
    loadLyrics,
    arrowDown,
    arrowLeft,
    arrowRight,
    arrowUp
}