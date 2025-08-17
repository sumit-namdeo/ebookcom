import React from 'react'
import { Accordion } from './Accordion'

export const Faq = () => {

    const Faqs = [
        {
            "id": 1,
            "question": "What is React?",
            "answer": "React is a JavaScript library for building user interfaces."
        },
        {
            "id": 2,
            "question": "What is JSX?",
            "answer": "JSX is a syntax extension for JavaScript that looks like HTML and is used in React."
        },
        {
            "id": 3,
            "question": "What is a component in React?",
            "answer": "A component is a reusable piece of UI in React, defined as a JavaScript function or class."
        },
        {
            "id": 4,
            "question": "What is the virtual DOM?",
            "answer": "The virtual DOM is a lightweight representation of the real DOM used by React to optimize updates."
        },
        {
            "id": 5,
            "question": "What are props in React?",
            "answer": "Props are inputs to React components that allow data to be passed from parent to child."
        }
    ]

    return (
        <>

            <div id="accordion-collapse" data-accordion="collapse">

                {
                    Faqs.map(({ id, question, answer }) => (
                        <Accordion key={id} id={id} question={question} answer={answer} />
                    ))
                }

            </div>

        </>
    )
}
