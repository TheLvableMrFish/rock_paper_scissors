import { useState } from "react";

import Header from "./Header";
import Structure from "./Structure";
import OutcomeAnimation from "./OutcomeAnimation";
import Rules from "./Rules";

const Start =()=>{

    const [rules, setRules] = useState(false)
    const [inGame, setInGame] = useState(true)
    const [score, setScore] = useState(0)
    const [stats, setStats] = useState({
        myChoice: "rock",
        oppChoice: "scissors",
        winStatus: "win"
    })

    const getFromRules =()=>{
        setRules(!rules)
    }

    const getFromOutcomeAnimation =(restart)=>{
        setInGame(restart)
    }

    const getFromCharacter =(myChoice, oppChoice, outcome)=>{

        setInGame(false)

        setStats(stats => ({
            myChoice: myChoice,
            oppChoice: oppChoice,
            winStatus: outcome
        }))

        if(outcome === "win"){
            setScore(score + 2)
        } if(outcome === "lose"){
            if(score > 0){
                setScore(score - 1)
            }
        }
    }

    return(
        <>
            <Header 
                score={score}
            />
            {inGame && 
                <Structure 
                    getFromCharacter={getFromCharacter}
                />
            }
            {!inGame && 
                <OutcomeAnimation 
                    myChoice={stats.myChoice}
                    oppChoice={stats.oppChoice}
                    winStatus={stats.winStatus}
                    getFromOutcomeAnimation={getFromOutcomeAnimation}
                />
            
            }  
            <Rules 
                getFromRules={getFromRules}
            />
        </>
    )
}

export default Start