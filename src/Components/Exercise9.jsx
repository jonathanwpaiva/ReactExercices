import { useState, useEffect } from 'react';
import '../Assets/Styles/Exercise9.css'
import axios from 'axios'
import AvatarCard from './AvatarCard';
import CustomButton from './CustomButton';

const API_URL = 'https://random-data-api.com/api/users/random_user?size=10'

const Exercise9 = () => {    
    const [randomData, setRandomData] = useState([])

    const apiCall = () => {
        axios.get(API_URL).then((response) => {
            setRandomData(response.data)
        })
        
    }
    useEffect(() => {
        apiCall();
    }, [])
    
    
    return (
        <div className='ex9CSS' >
            <div className='editButton'>
            <CustomButton onClick={() => apiCall()}>Fetch RandomApi</CustomButton>
            </div>

            <div className='data'>
            {randomData.map((data) => (
                <AvatarCard
                    avatar={data.avatar}
                    firstName={data.first_name}
                    lastName={data.last_name}
                    jobTitle={data.employment.title}
                    city={data.address.city}
                    street={data.address.street_name}
                    email={data.email}
                />
            ))} 
            </div>
            
        </div>
    );
}
export default Exercise9;