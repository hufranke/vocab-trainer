import { useState } from 'react'

import Button from './Button'

const Categories = () => {
    /** State */
    const [ btnHtmlActive, setBtnHtmlActive ] = useState(false)
    const [ btnCssActive, setBtnCssActive ] = useState(false)
    const [ btnJsActive, setBtnJsActive ] = useState(true)

    /** Colors of Btns */
    const btnColors = ['green', 'grey']

    return (
        <div>
            <h4>Choose category</h4>
            <Button color={ btnHtmlActive ? btnColors[0] : btnColors[1] } text="HTML" onClick={ () => { setBtnHtmlActive(!btnHtmlActive)}}/>
            <Button color={ btnCssActive ? btnColors[0] : btnColors[1] } text="CSS" />
            <Button color={ btnJsActive ? btnColors[0] : btnColors[1] } text="JS" />
        </div>
    )
}

export default Categories