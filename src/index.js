import React from 'react'
import ReactDOM from 'react-dom'
import './css/main.css'
import downArrow from './images/icon-arrow-down.svg'

const arrow = <img src={downArrow} alt='arrow' />

const questions = [
    {
        question: 'How many team members can I invite?',
        answer: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',
    },
    {
        question: 'What is the maximum file upload size?',
        answer: 'No more than 2GB. All files in your account must fit your allotted storage space.',
    },
    {
        question: 'How do I reset my password?',
        answer: 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.',
    },
    {
        question: 'Can I cancel my subscription?',
        answer: 'Yes! Send us a message and we’ll process your request no questions asked.',
    },
    {
        question: 'Do you provide additional support?',
        answer: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.',
    },
]

const faqs = questions.map((question) => {
    return (
        <li key={question.question} className="question">
            <div className='question'>
                {question.question}
                {arrow}
            </div>
            <p className='answer inactive'>{question.answer}</p>
        </li>

    )

})


class App extends React.Component {
    render() {
        return (
            <main>
                <div className="graphic"></div>
                <div className="faq">
                    <h1>Faq</h1>
                    <ul>
                        {faqs}
                    </ul>
                </div>

            </main>
        )
    }

}


ReactDOM.render(<App />, document.getElementById("root"));