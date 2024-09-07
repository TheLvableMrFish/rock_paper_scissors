import React from "react";

import Character from "./Character";

const Structure =({getFromCharacter})=>{

    return(
        <>      
            <div
                style={{
                    position: "relative",
                    width: "fit-content",
                    left: "50%",
                    transform: "translate(-50%, 25%)",
                }}
            >
                <img 
                    src="./images/bg-pentagon.svg" 
                    style={{
                        position: "relative",
                        width: "450px",
                    }}
                />

                <div
                    style={{
                        position: "absolute",
                        right: "10%",
                        bottom: "-12%",
                    }}
                >
                    <Character 
                        chosenCharacter="rock"
                        getFromCharacter={getFromCharacter}
                        clickable={true}
                    />
                </div>

                <div
                    style={{
                        position: "absolute",
                        top: "25%",
                        right: "-8%",
                    }}
                >
                    <Character 
                        chosenCharacter="paper" 
                        getFromCharacter={getFromCharacter}
                        clickable={true}
                    />
                </div>

                <div
                    style={{
                        position: "absolute",
                        top: "-5%",
                        left: "50%",
                        top: "-25%",
                        transform: "translate(-50%, 50%)",
                    }}
                >
                    <Character 
                        chosenCharacter="scissors" 
                        getFromCharacter={getFromCharacter}
                        clickable={true}
                    />
                </div>

                <div
                    style={{
                        position: "absolute",
                        top: "25%",
                        left: "-8%",
                    }}
                >
                    <Character 
                        chosenCharacter="spock" 
                        getFromCharacter={getFromCharacter}
                        clickable={true}
                    />
                </div>

                <div
                    style={{
                        position: "absolute",
                        left: "10%",
                        bottom: "-12%",
                    }}
                >
                    <Character 
                        chosenCharacter="lizard" 
                        getFromCharacter={getFromCharacter}
                        clickable={true}
                    />
                </div>

            </div>
            


        </>
    )
}

export default Structure