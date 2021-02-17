import React from 'react'
import ReactDOM from 'react-dom'
import './css/main.css'
import downArrow from './images/icon-arrow-down.svg'



const questions = [
    {
        number: 1,
        question: 'How many team members can I invite?',
        answer: 'I invite? You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',
    },
    {
        number: 2,
        question: 'What is the maximum file upload size?',
        answer: 'What is the maximum file upload size? No more than 2GB. All files in your account must fit your allotted storage space.',
    },
    {
        number: 3,
        question: 'How do I reset my password?',
        answer: 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.',
    },
    {
        number: 4,
        question: 'Can I cancel my subscription?',
        answer: 'Yes! Send us a message and we’ll process your request no questions asked.',
    },
    {
        number: 5,
        question: 'Do you provide additional support?',
        answer: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.',
    },
]

class App extends React.Component {
    render() {
        return (
            <main>
                <div className="faq">
                    <h1>Faq</h1>
                    <ul>
                        <li>How many team members can I invite? <img src={downArrow} alt='arrow'/> </li>
                        <li>What is the maximum file upload size?<img src={downArrow} alt='arrow'/></li>
                        <li>How do I reset my password?<img src={downArrow} alt='arrow'/></li>
                        <li>Can I cancel my subscription?<img src={downArrow} alt='arrow'/></li>
                        <li>Do you provide additional support?<img src={downArrow} alt='arrow'/></li>
                    </ul>
                </div>

            </main>
        )
    }

}


ReactDOM.render(<App />, document.getElementById("root"));