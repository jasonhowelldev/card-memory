// https://www.deckofcardsapi.com/
// get deck : https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1
// draw cards : https://www.deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2

document.querySelector('button').addEventListener('click', getDeck)

function getDeck(){
  let pairs = document.querySelector('input').value

  if ( pairs > 26 ) {
    pairs = prompt("paris must be less than 26", 4)
  }

  const url = `https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        getCards(data.deck_id, pairs)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
    
}

function getCards(deckID, pairs) {
  // TODO : api request to get the number of cards needed
  const url = `https://www.deckofcardsapi.com/api/deck/${deckID}/draw/?count=${pairs}`

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      // TODO : append cards to DOM
    })

}