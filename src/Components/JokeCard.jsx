import '../Assets/Styles/JokeCard.css'

const JokeCard = (props) => {

    const setup = props.setup;
    const punchLine = props.punchLine

    return (

        <div className='cardCSS'>
            <h3>{setup}</h3>
            <p>{punchLine}</p>
        </div>



    )
}

export default JokeCard;