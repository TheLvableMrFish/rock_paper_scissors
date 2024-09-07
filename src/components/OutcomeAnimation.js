import Character from "./Character"

const OutcomeAnimation =({myChoice, oppChoice, winStatus, getFromOutcomeAnimation})=>{

    const clickButton =()=>{
        getFromOutcomeAnimation(true)
    }

    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-start">
                        <div className="row player">

                            <p>You Picked</p>

                            <Character 
                                chosenCharacter={myChoice}
                                getFromChild={null}
                                clickable={false}
                            />

                        </div>
                    </div>

                    <div className="col-md-6 d-flex justify-content-end">
                        <div className="row player">
                            <p>The House Picked</p>
                            <Character 
                                    chosenCharacter={oppChoice}
                                    getFromChild={null}
                                    clickable={false}
                                />
                        </div>
                    </div>
                </div>

                <div className="play-btn-container">
                    <div className="row">
                        <div className="outcome">{`You ${winStatus}`}</div>
                        <div className="play-btn"
                            style={{
                                backgroundColor: "white",
                                paddingTop: "7px",
                                paddingBottom: "7px",
                                borderRadius: "8px",
                                fontWeight: "700",
                                border: "1px solid #201524"
                            }}
                            onClick={clickButton}
                        >Play Again</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OutcomeAnimation