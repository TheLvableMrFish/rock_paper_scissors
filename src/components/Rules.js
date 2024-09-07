import { useState } from "react"

const Rules =({getFromRules})=>{

    const [rules, setRules] = useState(false)


    const onClick=()=>{
        setRules(!rules)
        getFromRules(rules)
    }

    return(
        <>
            {rules && <div className="container rule-sheet"
                style={{
                    position: "absolute",
                    border: "1px solid white",
                    width: "fit-content",
                    backgroundColor: "white",
                    zIndex: "2",
                    left: "50%",
                    top: "40%",
                    transform: "translate(-50%, -50%)",
                    padding: "30px",
                    borderRadius: "7px"
                }}
            >
                <div className="row">
                    <div className="col rule-name">
                        <p
                            style={{
                                fontWeight: "700",
                                fontSize: "25px",
                            }}
                        >
                            RULES
                        </p>
                    </div>
                    <div className="col d-flex justify-content-end">
                        <p
                            style={{
                                cursor: "pointer",
                                fontWeight: "700",
                                color: "gray"
                            }}
                            onClick={onClick}
                        >
                            X
                        </p>
                    </div>

                </div>
                <img src="./images/image-rules-bonus.svg" 
                    style={{
                        zIndex: "99"
                    }}
                />
            </div>}

            {!rules && <div className="d-flex justify-content-end">
                <p  className="rules-btn"
                    style={{
                        position: "absolute",
                        bottom: "40px",
                        right: "80px",
                        cursor: "pointer",
                        border: "2px solid #201524",
                        padding: "10px 30px",
                        borderRadius: "8px",
                        fontSize: "18px",
                        fontWeight: "500",
                        outline: "2px solid white"
                    }}
                    onClick={onClick}
                >Rules</p>
            </div>}
        </>
    )
}

export default Rules