import { useState } from 'react'
import Die from './Die'



function Rolldice () {

    const [diceone, setDiceone] = useState('one')
    const [dicetwo, setDicetwo] = useState('two')

    function getRandomInt() {
        let min = Math.ceil(1);
        let max = Math.floor(7);
        let dOne = Math.floor(Math.random() * (max - min) + min)
        let dTwo = Math.floor(Math.random() * (max - min) + min)
        randomNumber(dOne, dTwo)
    }

    const randomNumber = (dOne, dTwo) => {
        // let dOne = Math.floor(Math.random() * 6)
        // let dTwo = Math.floor(Math.random() * 6)

        setDiceone(dOne)
        setDicetwo(dTwo)
    }

    

    const data = [diceone, dicetwo]
    const diceList = data.map((diceItem, i) => <Die diceItem={diceItem} key={i}/>)
    return(
        <div className='container'>
            {diceList}
            <button onClick={getRandomInt}>Roll Dice</button>
        </div>
    )

}

export default Rolldice;