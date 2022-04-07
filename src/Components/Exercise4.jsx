import { useState, useEffect } from 'react';

import '../Assets/Styles/Exercise4.css'
import CustomButton from './CustomButton';

const Exercise4 = () => {
    const [counter, setCounter] = useState(0)
        
    useEffect(() => {
        setCounter(0)
      }, [])

    return (
        <div className='Button-Clicked' >
            <p>The button has been clicked {counter} times</p>

            <CustomButton onClick = {() => setCounter((prevCount) => prevCount + 1)}>Click Me</CustomButton>
        </div>
    );
}
export default Exercise4;