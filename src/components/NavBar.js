import Button from '@mui/material/Button';
import CartWidget from './CartWidget/CartWidget'
function NavBar (props) {
    return(
        <header className='header'>
            <div className='logo'>
                <img src="logo.jpg"/>
            </div>
            <div>  
                <h1 className='titulo'>Oh la la bombones! </h1>
            </div>
            <ul className='navbar'>
                <li><Button variant="contained">Inicio</Button></li>
                <li><Button variant="contained">Productos</Button></li>
                <li><Button variant="contained">Nosotros</Button></li>
                <li><Button variant="contained">Contacto</Button></li>
            </ul>
            <CartWidget />
        </header>
    )
}
export default NavBar