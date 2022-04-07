import '../Assets/Styles/Exercise3.css'
import CustomButton from './CustomButton';

const Exercise3 = () => {

    return (
        <div className='Buttons' >

            <div className='CustomButton'>
                <CustomButton onClick={() => alert('You Clicked on Button 1')}>Button 1</CustomButton>
            </div>

            <div className='CustomButton'>
                <CustomButton onClick={() => alert('You Clicked on Button 2')}>Button 2</CustomButton>
            </div>
            
            <div className='CustomButton'>
                <CustomButton onClick={() => alert('You Clicked on Button 3')}>Button 3</CustomButton>
            </div>

        </div>

    );
}

export default Exercise3;