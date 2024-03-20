import { Link } from 'react-router-dom'
import Logo from '../../assets/images/Logo.png'

//import '../../pages/CSS/landing.css'
//import './Navbar.css'

function Navbar(){
    return(
    //     <nav classNamee='main-nav'>
    //         <div className='navbar-logo'>
    //             <Link to='/' className='nav-item nav-logo'>
    //                 <img src={Logo} alt='logo' width={250} height={90}/>
    //             </Link>
    //         </div>
    //         <div>
    //             <ul id='navbar'>
    //                 <li><a className="active"href='/Home'>Home</a></li>
    //                 <li><a href='/'>About</a></li>
    //                 <li><a href='/'>How it Works</a></li>
    //                 <li><a href='/'>Testimonals</a></li>
    //             </ul>
    //         </div>
    // </nav>
    <nav >
        <div className='nav-logo-container'>
            <Link to='/' className='nav-item nav-logo'>
                <img src={Logo} alt='logo' width={250} height={90}/>
            </Link>
        </div>
        <div className="navbar-links-container">
                <a href='/Home'>Home</a>
                <a href='/'>About</a>
                <a href='/'>How it Works</a>
                <a href='/'>Contact</a>
                <button className="primary-button">Log In</button>
        </div>
    </nav>
    )
}

export default Navbar;