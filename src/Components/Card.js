import React, { Component, useState } from "react";
import LevelButtons from './LevelButtons'

const Card = ({questionData, onChangeLevel, toggleAns, isAnsActive}) => {
    // console.log(questionData)

    return(
        <div className="card-main-container">
            <div className="question">
                <button className="toggleAnsBtn" onClick={toggleAns}>
                    <p>{questionData.id} {questionData.question}</p>
                </button>
            </div>
            <div className={`answer ${isAnsActive ? "" : "answer-collapsed"}`}>
                <div className="answer-text">
                    <h4>Answer</h4>
                    {questionData.answer}
                </div>
                <div className="answer-level">
                    <p>Confidence level</p>
                    <div className="answer-level-btn">
                        <LevelButtons id={questionData.id} level={questionData.level} onChangeLevel={onChangeLevel}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;