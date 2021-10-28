import { useState } from 'react'

const QuestionCategories = ({onChangeCategory}) => {
    const categories = ["all", "HTML","CSS", "JS"]

    /** State */
    const [ clickedId, setClickedId ] = useState(0)

    /** Colors of Btns */
    const btnColors = ['green', 'grey']

    return (
        <div>
            <h4>Choose category</h4>
            { categories.map((btnLabel, i) => ( // paranthesis are used for returns in arrow functions. It's the same as: () => { return() }
                <button 
                    key={i}
                    name ={btnLabel}
                    className = { i === clickedId ? "btnCatSelect btnActiveCatSelect" : "btnCatSelect" }
                    onClick={() => {
                            setClickedId(i)
                            onChangeCategory(btnLabel)
                        }}>
                    {btnLabel}
                </button>
            )) }
        </div>
    )
}

export default QuestionCategories