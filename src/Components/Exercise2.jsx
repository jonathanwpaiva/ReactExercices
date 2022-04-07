import '../Assets/Styles/Exercise2.css'
import CustomButton from './CustomButton';

const Exercise2 = () => {

    return (
        <div className='Button-Clicked' >
            <CustomButton onClick={() => alert('Clicked')}>Button 1</CustomButton>
        </div>
    );
}
export default Exercise2;