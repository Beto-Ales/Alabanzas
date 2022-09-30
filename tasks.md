08/09/22

    loadLyrics()
    dots()
    arrowRight() *** in progress / done ***
    arrowLeft()  *** in progress / done ***
    arrowDown()  *** in progress / done ***
    arrowUp()    *** in progress / done ***
    keyShow()    *** in progress / done ***

    implement modularity    *** in progress ***
    implement playlist    *** in progress ***

    [variable, setVariable] decide to pass all the songs or playlist


    pass the key event to displayLyrics() & leave the function to handle every situation?

---

how it works

    there is an obj songsBook                               there are variables verse & song, to control:

        songsBook {                                         the song we want to play songsBook[song] => songsBook[1]
            1: {
                key: 'A',                                   the verse of the song songsBook[song]['lyrics][verse] =>
                lyrics: [
                    `<h1>some lyrics</h1>`,                     songsBook[1]['lyrics][1]
                    `<h1>some lyrics</h1>`,
                    `<h1>some lyrics</h1>`                  there is a function controlling these actions loadLyrics()
                ]
            },                                                  insert the info from the obj into html containers
            2: {
                key: 'A',                                       verseContainer.innerHTML = songsBook[song][lyrics][verse]
                lyrics: [
                    `<h1>some lyrics</h1>`,                     keyContainer.innerHTML = songsBook[song]['key']
                    `<h1>some lyrics</h1>`,
                    `<h1>some lyrics</h1>`                  loadLyrics() calls a function dots() which displays bullets
                ]
            }                                               indicating the progress of one particular song
        }

dots() removes previous bullets if we start a new song, & place new bullets considering the amount of verses of the new song.

    it will colored the bullets of the verses already displayed including the current bullet verse.

the commands for controlling the actions are key events: arrows & 'k' key. these events call loadLyrics() & will increment or decrement

    the variables verse & song. 'k' key will show/hide the key of the song.
