05/10/22

unify criteria

    variable song which index the song to be display starts with value 1 becouse the songs obj starts with first element id 1. then when we create an array containing the ids of the selected songs it will be 0based & the song variable wont work. change the hole obj ids starting from 0 & then the variable song tarting from 0?

    songsBook start with pair key value, key: 0 value {}

04/10/22

script.js

    line 5 convert variables & setters to object
    line 26 & 29 find solution to singing & playlistActive variables mechanism
    line 31 containers (pay atention to order). move to module?
    line 62 event listener move to module?
    line 110 replace songsBook with List object

03/10/22

class

    internal id generator() not needed
    active boolean

    different lists

        all the songs
        playlist
        lists by key

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
