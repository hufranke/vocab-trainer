import React, { useState } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Confidence = (props) => {
    let [knowledgeLevel, setKnowledgeLevel] = useState("bad");
    const confidenceBtns = props.confidenceLevel.map((index) => {
        return <button key={index} onClick={() => {
            setKnowledgeLevel(index)
        }}>{index}</button>
    })

    return(
        <div className="confidence-level-buttons-container">
            <p>Knowledge Level: {knowledgeLevel}</p>
            {confidenceBtns}
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
        </div>
    )
}

export default Confidence;