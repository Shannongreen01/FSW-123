import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faDiceOne,
    faDiceTwo,
    faDiceThree,
    faDiceFour,
    faDiceFive,
    faDiceSix,
    faDiceD6
}   from '@fortawesome/free-solid-svg-icons'

let chosenIcon = faDiceD6

const Die = ( {diceItem, i} ) => {
    // console.log(diceone)
    // console.log(dicetwo)

    if(diceItem == 1){
        chosenIcon = faDiceOne
        console.log(1)
    }else if(diceItem == 2){
        chosenIcon = faDiceTwo
        console.log(2)
    }else if(diceItem == 3){
        chosenIcon = faDiceThree
        console.log(3)
    }else if(diceItem == 4){
        chosenIcon = faDiceFour
        console.log(4)
    }else if(diceItem == 5){
        chosenIcon = faDiceFive
        console.log(5)
    }else if(diceItem == 6){
        chosenIcon = faDiceSix
        console.log(6)
    }

    if(diceItem == 1){
        chosenIcon = faDiceOne
        console.log(1)
    }else if(diceItem == 2){
        chosenIcon = faDiceTwo
        console.log(2)
    }else if(diceItem == 3){
        chosenIcon = faDiceThree
        console.log(3)
    }else if(diceItem == 4){
        chosenIcon = faDiceFour
        console.log(4)
    }else if(diceItem == 5){
        chosenIcon = faDiceFive
        console.log(5)
    }else if(diceItem == 6){
        chosenIcon = faDiceSix
        console.log(6)
    }

    return(
        <div className='iconWrapper'>
            <FontAwesomeIcon icon={chosenIcon} className='icon'/>
            {/* <div className="diceoneRender" key={i}>{diceone}</div>
            <div className="dicetwoRender" key={i}>{dicetwo}</div> */}
        </div>
    )
}

export default Die;