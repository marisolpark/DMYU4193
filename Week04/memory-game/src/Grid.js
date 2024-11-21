import { useEffect, useState } from 'react'
import cx from 'classnames'
import CardPattern from './assets/moroccan-flower-dark.png'
import Bilbo from './assets/bilbo-baggins.png'
import Cameron from './assets/cameron-poe.png'
import Nikki from './assets/nikki-cage.png'
import Pollux from './assets/pollux-troy.png'
import styles from './UI.module.css'

const cardImages = [
  {src: Bilbo, matched: false}, 
  {src: Cameron, matched: false}, 
  {src: Nikki, matched: false}, 
  {src: Pollux, matched: false}
]

export default function Grid(props) {
  //states to store our deck of cards
  const [cards, setCards] = useState([])

  //state to keep track of or turns
  const [turns, setTurns] = useState(0)

  //keep track of choice 1 & 2
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)


  //a function to double our cards so each has a duplicate
  //and the shuffle amd deal the deck on the screen
  
  const shuffleCards = () => {
    //spreadout img array 2x times so we have an array with duplicates to shuffle

    // the '...' mark that i want to unpack or spread something into this array
    const shuffleCards = [...cardImages, ...cardImages]

    //add a sort function which fires a function from each item in our new array
    //when a random number is negative, leave the item where it is
    //if it is positive, swap with another random item to shuffle
    .sort(() => Math.random() -0.5 )

    //add a mapping function to add an ID property to each img object (key-value pair)
    //first we spread the current properties and then add a new one
    //you can use () instead of {} if you want to return the result of the arrow function
    .map((card) => (
      {...card, id: Math.random()}
    ))

    // use our setter from useStates to add our new array of doubled, shuffled object with a uniqye id to each
    setCards(shuffleCards)

    //reset our turns to 0
    setTurns(0)

  }

  const handleChoice = () => {
    console.log(cards)
    //check if we have choice one
    //if we don't have a choice 1 set, make the current card choice 1
    choiceOne ? setChoiceTwo(cards) : setChoiceOne(cards) //tirnary statement

    //what if we have a choiceOne and a choiceTwo set?
    //we need to compare them, but NOT HERE
    //we need to use useEffect
  }

  //this will fire where choiceOne and choiceTwo change
  useEffect(() => {
    //this is where we compare
    //first we make sure we have both choices
    if (choiceOne && choiceTwo) {
      //compare src in each card to see if they match
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          //map through the entire array of cards, and set the matched ones to matched=true
          return prevCards.map((card) => {
            //if they match set matched to true for those cards
            if(card.src === choiceOne.src) {
              console.log('these cards match')
              return {...card, matched: true}
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        console.log('this cards do not match')
        setTimeout(() => resetTurn(), 1000)

      }
    }
  }, [choiceOne, choiceTwo])

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns((prevTurns) => prevTurns + 1)
  }

  return (
    <>
      <button onClick={shuffleCards}>New Game</button>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* get confortable with mapping */}
          {
            cards.map((card) => (

              <Card 
              key={card.id} 
              card={card} 
              handleChoice={handleChoice} 
              flipped={card === choiceOne || card === choiceTwo || card.matched} />
          ))}
        </div>
      </div>
      <div>Turns: {turns}</div>
    </>
  )
}

function Card(props) {
  const {card, handleChoice, flipped} = props
  //keep track of flipped/active in state
  // const [isActive, setIsActive] = useState(false)

  //toggle between active and inactive
  const handleClick = (event) => {
    //toggle active states
    // setIsActive((currect) => !currect)
    handleChoice(card)
  }

  return (
    <div className={styles.flip_card}>
      <div onClick={handleClick} className={cx(styles.flip_card_inner, {[styles.flipped]:flipped})}>
        <div className={styles.flip_card_front}>
          <img src={CardPattern} alt="card back" />
        </div>
        <div className={styles.flip_card_back}>
          <img src={card.src} alt="card front" />
        </div>
      </div>
    </div>
  )
}
