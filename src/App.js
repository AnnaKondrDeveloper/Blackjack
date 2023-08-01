import './App.css';
import { useEffect } from 'react';

function App() {

	let cardImage1;
	let cardImage2;

	useEffect(() => {

	fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1").then(res => {
		return res.json();
	}).then(res => {
		// eslint-disable-next-line react-hooks/exhaustive-deps
		let deck_id = res.deck_id;
		return fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`)
	}).then( res => {
		return res.json();
	}).then( res => {

		cardImage1 = res.cards[0].image; 
		cardImage2 = res.cards[1].image
		return (cardImage1, cardImage2)
	})
  	 }, []);


  return (
    <div className="container">
		<div className="card_field">
			<img src="{cardImage1}" alt="card"></img>
			<img src="{cardImage2}" alt="card"></img>
		</div>

    </div>
  );
}

export default App;
