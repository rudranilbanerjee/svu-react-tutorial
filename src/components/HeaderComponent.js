import { Link } from 'react-router-dom';
import {logoImg} from './../utils/resturantDetails'
const HeaderComponent = () => {
    return (
        <div className="header">
            <img src={logoImg} alt="Logo" />
            <ul>
                {/* <li><a href="/">Home</a></li> */}
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li>Cart</li>
            </ul>
        </div>
    )
}

export default HeaderComponent;