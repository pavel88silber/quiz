import classes from './AnswerItem.css'
import React from 'react'

const AnswersItem = props => {

    return (
        <li 
            className={classes.AnswerItem}
        >
            { props.answer.text}
        </li>
    )
}

 export default AnswersItem