import { useState, useEffect } from 'react';
import '../Assets/Styles/Exercise8.css'
import JokeCard from './JokeCard';

const json =
    [
        {
            id: "1",
            setup: "What's the best thing about a Boolean?",
            punchline: "Even if you're wrong, you're only off by a bit"
        },
        {
            id: "2",
            setup: "Why do programmers wear glasses?",
            punchline: "Because they need to C#'",
        },
        {
            id: "3",
            setup: "teste",
            punchline: "kkj",
        },
        {
            id: "2",
            setup: "Why do programmers wear glasses?",
            punchline: "Because they need to C#'",
        },
        {
            id: "2",
            setup: "Why do programmers wear glasses?",
            punchline: "Because they need to C#'",
        },
        {
            id: "2",
            setup: "Why do programmers wear glasses?",
            punchline: "Because they need to C#'",
        },
       
       
    ]

const Exercise8 = () => {
    const [jsonExample, setJsonExample] = useState([])

    useEffect(() => {
        setJsonExample(json)
    }, [])

    console.log(jsonExample)
    return (
        <div className='ex8CSS' >
            {jsonExample.map((examples) => (
                <JokeCard
                    setup={examples.setup}
                    punchLine={examples.punchline}
                />
            ))}

        </div>
    );
}
export default Exercise8;