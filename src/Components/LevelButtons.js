import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import PropTypes from 'prop-types'

const LevelButtons = ({id, level, onChangeLevel}) => {
    // console.log(level)
    const starType = [<AiFillStar />, <AiOutlineStar />]

    return (
        <>
            <button key={1} className="star-btn" onClick={() => {onChangeLevel(id, 1)}}>{starType[0]}</button>
            <button key={2} className="star-btn" onClick={() => {onChangeLevel(id, 2)}}>{ level > 1 ? starType[0] : starType[1] }</button>
            <button key={3} className="star-btn" onClick={() => {onChangeLevel(id, 3)}}>{ level > 2 ? starType[0] : starType[1] }</button>   
        </>
    )
}

export default LevelButtons