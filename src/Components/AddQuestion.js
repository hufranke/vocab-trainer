import { useState } from "react";
import Button from "./Button";

const AddQuestion = ({createNewQuestion}) => {
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if((!question||(!answer))){
            alert("Please enter question")
        } else{
            createNewQuestion(question, answer)

            setQuestion('')
            setAnswer('')
        }
    }

    return(
        <form className="form-control" onSubmit={onSubmit}>
            <label className="form-control label">Question</label>
            <input
                type="text"
                className="form-control input"
                placeholder="What is the question?"
                autoFocus
                value={question}
                onChange={(e) => {
                    setQuestion(e.target.value)
                }} />
            <label className="form-control label">Answer</label>
            {/* <input
                type="text"
                className="form-control input"
                placeholder="What's the answer to the question?"
                value={answer}
                onChange={(e) => {
                    setAnswer(e.target.value)
                }} /> */}
            <div className="toolbar">
                <Button text={'Li'} />
                <Button text={'B'} />
            </div>
            <textarea className="form-control input" value={answer} onChange={(e) => {
                    setAnswer(e.target.value)
            }}/>
            <input className="btn" type="submit" value="Save" ></input>
        </form>
    )
}

export default AddQuestion;