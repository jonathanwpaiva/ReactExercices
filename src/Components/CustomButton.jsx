import '../Assets/Styles/CustomButton.css'

const CustomButton = ({children,...buttonProps}) => {
    
    return (        
         <button className='Custom-Button' {...buttonProps}>{children}</button>        
    );
}

export default CustomButton;