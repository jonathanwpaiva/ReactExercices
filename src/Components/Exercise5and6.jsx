
import '../Assets/Styles/Exercise5and6.css'

const Exercise5and6 = () => {
    const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse', 'henrique', 'brunera', 'deoxys'];

    return (
        <div className='CircleList'>
            <p>Animals list</p>
           {animals.map(animalsMap => <li >{animalsMap}</li>)}

        </div>
    );
}
export default Exercise5and6;