import '../Assets/Styles/NavBar.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (

        <div className='navBar'>

            <ul>
                <Link className="nav_link" to="/exercicio1" exact>
                    <li className='nav_item'>
                        Exercicio 1
                    </li>
                </Link>

                <Link className="nav_link" to="/exercicio2" exact>
                    <li className='nav_item'>
                        Exercicio 2
                    </li>
                </Link>

                <Link className="nav_link" to="/exercicio3" exact>
                    <li className='nav_item'>
                        Exercicio 3
                    </li>
                </Link>

                <Link className="nav_link" to="/exercicio4" exact>
                    <li className='nav_item'>
                        Exercicio 4
                    </li>
                </Link>

                <Link className="nav_link" to="/exercicio5e6" exact>
                    <li className='nav_item'>
                        Exercicio 5 e 6
                    </li>
                </Link>

                <Link className="nav_link" to="/exercicio7" exact>
                    <li className='nav_item'>
                        Exercicio 7
                    </li>
                </Link>

                <Link className="nav_link" to="/exercicio8" exact>
                    <li className='nav_item'>
                        Exercicio 8
                    </li>
                </Link>

                <Link className="nav_link" to="/exercicio9" exact>
                    <li className='nav_item'>
                        Exercicio 9
                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default NavBar;