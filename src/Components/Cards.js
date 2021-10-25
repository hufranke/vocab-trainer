import React, {Component, useState} from "react";
import Card from './Card'

const Cards = ({sortedQues, changeLevel, quesNum, toggleAns, isAnsActive }) => {
    return(
        <div>
            {/* {sortedQues.map(quesAns => (
                <Card questionData={quesAns} onChangeLevel={changeLevel}/>
            ))} */}
            <Card questionData={sortedQues[quesNum]} onChangeLevel={changeLevel} toggleAns={toggleAns} isAnsActive={isAnsActive}/>
        </div>
        
        
        // <div>
        //     <Card questionData={sortedQues[weightedRandom(0,sortedQues.length)]} onChangeLevel={changeLevel} />
        // </div>
    )
}

export default Cards;