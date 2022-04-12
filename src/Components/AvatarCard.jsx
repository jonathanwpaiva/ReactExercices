import '../Assets/Styles/AvatarCard.css'

const AvatarCard = (props) => {

    const avatar = props.avatar;
    const firstName = props.firstName
    const lastName = props.lastName
    const jobTitle = props.jobTitle
    const city = props.city
    const street = props.street
    const email = props.email    

    return (
    <div className='avatarCardCSS'>
        <div className='avatarCardCSS-inner'>
           
            <div className='cardContent'>
                <img src={`${avatar}`}></img>
                <p className='fullName'>{firstName} {lastName}</p>
                <p>{jobTitle}</p>

            </div>
            <div className='extraContent'>
               <h3>More Informations</h3>
                <p><b>City:</b> {city}</p>
                <p><b>Street:</b> {street}</p>
                <p><b>Email:</b> {email}</p>
            </div>
        </div>
    </div>
    )
}

export default AvatarCard;