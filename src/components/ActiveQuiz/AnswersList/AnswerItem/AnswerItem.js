import classes from './AnswerItem.css'
import React from 'react'

const AnswersItem = props => {

    // console.log(props);

    return (
        <li 
            className={classes.AnswerItem}
            onClick={() => props.onAnswerClick(props.answer.id)}
        >
            { props.answer.text}
        </li>
    )
}

 export default AnswersItem