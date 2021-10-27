import { useState } from 'react'

import Button from './Button'

const Header = ({onAddQues,onNextQues}) => {
    // State button
    const [btnAddActive, setBtnAddActive] = useState(true)

    const btnAddClick = () => {
        setBtnAddActive(!btnAddActive)

        onAddQues()
    }

    return(
        <div>
            <h2>Web Dev Learning Questions</h2>
            

            { btnAddActive ? <Button color={'green'} text={'Add'} onClick={btnAddClick} /> :
                <Button color={'darkred'} text={'close'} onClick={btnAddClick} /> }
            
            <Button color={'grey'} text={'Next'} onClick={onNextQues} />
        </div>
    )
}

export default Header;