import React from "react";

import Choices from '../data/choices'
import Calculations from "./Calculations";

const Character =({chosenCharacter, getFromCharacter, clickable})=>{

    const Choice = new Choices()

    let myChoice = Choice.options[chosenCharacter]

    let img = myChoice.img
    let color = myChoice.color

    const selectCharacter =()=>{
        if(clickable){
            const outcome = new Calculations()
            let [oppChoice, gameOutcome] = outcome.Outcomes(chosenCharacter)
           
            getFromCharacter(myChoice.name, oppChoice, gameOutcome)
        }
    }
    
    return(
        <>
            <div 
                className={`character ${clickable && "character-clickable"}`}
                style={{
                    aspectRatio: "1/1",
                    backgroundColor: "white",
                    border: `14px solid ${color}`,
                    borderRadius: "50%",
                    padding: "18px",
                    position: "relative",
                    width: "140px",
                }}
                onClick={selectCharacter}
            >
                <img 
                    src={`./images/${img}`} 
                    style={{
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                />
            </div>
            
        </>
    )
}

export default Character