import { useState} from 'react';
import '../Assets/Styles/Exercise7.css'
import CustomButton from './CustomButton';

const Exercise7 = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    

    const handleChangeFirstName = (e) => {
        setFirstName(e.target.value);        
    };

    const handleChangeLastName = (e) => {
        setLastName(e.target.value);        
    };


    return (
        <div className='forms'>
            <form>
                <label>
                    <input                        
                        value={firstName}
                        type="text"
                        firstName = "firstName"
                        placeholder='First name'
                        onChange={handleChangeFirstName}                      
                    />
                </label>
                <label>
                    <input
                        type="text"
                        lastName="lastName"
                        placeholder='Last name'
                        onChange={handleChangeLastName}
                        value={lastName}
                    />
                </label>

                <CustomButton onClick={() => alert(`Hello ${firstName} ${lastName}`)}>GREET ME</CustomButton>

            </form>
        </div>

    );
}
export default Exercise7;