import Choices from "../data/choices"

export default class Calculations{

    Outcomes =(character)=>{

        const Choice = new Choices()
        let myChoice = Choice.options[`${character}`]
        let choiceList = Choice.optionList


        let moveChoiceAmount = choiceList.length
        let oppChoice = choiceList[Math.floor(Math.random() * moveChoiceAmount)]
        
        let outcome
        
        if(myChoice.name == oppChoice){
            outcome = "tie"
        } else {

            outcome = "lose"

            for(let i = 0; i < myChoice.win.length; i++){
                if(myChoice.win[i] == oppChoice){
                    outcome = "win"
                }
            }
        }
        
        // console.log(`You chose ${character} and opponent chose ${oppChoice}. Which resulted in a ${outcome}.`)

        return [oppChoice, outcome]
    }

}