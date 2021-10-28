import React, {useState} from "react";

import Cards from './Components/Cards'
import Header from './Components/Header'
import AddQuestion from "./Components/AddQuestion";
import Categories from './Components/QuestionCategories'

const App = () => {
    /** State arrays */
    const [ques, setQues] = useState([
        {
            id: 1,
            category: 'JS',
            question: 'Which are the different types of variables in modern JS?',
            answer: <ul><li><b>var</b>: the "old" way. Can be written everywhere, which means, that you need to be careful where and how to use it.</li>
            <li><b>let</b>: is a block scoped variable. It can only be accessed and changed within its block (like a function)</li>
            <li><b>const</b>: are not allowed to be changed once declared.</li></ul>,
            level: 1
        },
        {
            id: 2,
            category: 'JS',
            question: 'A string is treated as what kind of object?',
            answer: 'As string is technically an object. Thus you can access every letter and use array-functions.',
            level: 2
        },
        {
            id: 3,
            category: 'JS',
            question: 'How are const and arrays intertwined?',
            answer: 'Arrays can be of type const. If so the array container will be protected but you can still change specific array contents.',
            level: 3
        },
        {
            id: 4,
            category: 'JS',
            question: `What's the difference of for-in and for-of?`,
            answer: <ul><li>for-in: returns only keys</li><li>for-of: returns the values</li></ul>,
            level: 1
        },
        {
            id: 5,
            category: 'JS',
            question: 'What is meant by the "Lexical Scope"?',
            answer: <p>Lexical scope refers to inheritance, such as nested functions can access the functions they're nested in (parent, grandparent and so on)</p>
        },
        {
            id: 6,
            category: 'CSS',
            question: 'What does padding do?',
            answer: <p>Padding adds space between the content and the  border of an element from the inside.</p>
        }
    ])
    
    const [showAddQues, setShowAddQues] = useState(false)

    const [quesNum, setQuesNum] = useState(0)

    const [ quesCat, setQuesCat ] = useState('all')
    
    // Categorize question array
    const categorizeQuestions = () => {
        let categorizedArray = []

        if(quesCat === 'all'){
            categorizedArray = ques
        } else{
            categorizedArray = ques.filter(ques => ques.category === quesCat)
        }

        return categorizedArray
    }

    // Sort question array
    const sortQuestions = () => {
        const categorizedQuestions = categorizeQuestions()
        return(
            [...categorizedQuestions].sort((a, b) => a.level - b.level)
        )
    }
    const sortedQues = sortQuestions()
    console.log(sortedQues)

    // Change question category
    const changeQuestionCategory = (category) => {
        setQuesCat(category)
    }

    // Change question Level
    const changeLevel = (id, inputLevel) => {
        setQues(ques.map((question) =>
            question.id === id ? {...question, level: inputLevel} : question))
    }

    // Create new question
    const createNewQuestion = (newQuestion, newAnswer) => {
        const newId = ques.length + 1
        const newQASet = 
            {
                id: newId,
                question: newQuestion,
                answer: newAnswer,
                level: 1
            }

        setQues([...ques, newQASet])
    }

    // Toggle showAddTask
    const toggleShowAddQues = () => {
        setShowAddQues(!showAddQues)
    }

    // Toggle show answer
    const [isAnsActive, setIsAnsActive] = useState(false)

    const toggleAns = () => {
        setIsAnsActive(!isAnsActive)
    }

    // Show next question
    const nextQuestion = () => {
        {quesNum < ques.length-1 ? setQuesNum(quesNum+1) : setQuesNum(0)}
        
        changeLevel(ques[quesNum].id, 1)
        
        {isAnsActive && toggleAns()}
    }

    /** Output */
    return (
        <div className="container">
            <Header onAddQues={toggleShowAddQues} onNextQues={nextQuestion} />
            
            {showAddQues && <AddQuestion createNewQuestion={createNewQuestion} /> }

            <Categories onChangeCategory={changeQuestionCategory} />

            <Cards sortedQues={sortedQues} changeLevel={changeLevel} quesNum={quesNum} toggleAns={toggleAns} isAnsActive={isAnsActive}/>
        </div>
    )
  }
  
  export default App;