console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = []

function addToCollection(collection, title, artist, yearPublished) {
  const album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  }
  collection.push(album)
  return album;
}


// myCollection.push('swimming','mac miller','2018')
// myCollection.push('too late to die young','sonder','2022')
// myCollection.push('circles','mac miller','2020')
// myCollection.push('sad boyz 4 life 2','junior h','2023')
// myCollection.push('blonde','frank ocean','2016')
// myCollection.push('cruisin with junior h','junior h','2020')

let albumZero = addToCollection(myCollection, 'swimming', 'mac miller', 2018)
let albumOne = addToCollection(myCollection, 'too late to die young', 'sonder', 2022)
let albumTwo = addToCollection(myCollection, 'circles', 'mac miller', 2020)
let albumThree = addToCollection(myCollection, 'sad boyz 4 life 2', 'junior h', 2023)
let albumFour = addToCollection(myCollection, 'blonde', 'frank ocean', 2016)
let albumFive = addToCollection(myCollection, 'cruisin with junior h', 'junior h', 2020)
console.table(myCollection)

function showCollection(collection) {
  for (let index = 0; index < collection.length; index++) {
    let album = collection[index]
      console.log(`title: ${album.title}, artist: ${album.artist}, years published: ${album .yearPublished}`)
  }
}
showCollection(myCollection)


function findByArtist(collection, artist) {
  let match = []
  for(let i = 0; i < collection.length; i++) {
    if(collection[i].artist === artist) {
      match.push(collection[i])
    }
  }
  return match
}

findByArtist(myCollection, 'mac miller')


// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
