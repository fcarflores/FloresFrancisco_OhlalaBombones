import CartWidget from '../CartWidget/CartWidget'
function NavBar (props) {
    return(
        <header className='header'>
            <div className='logo'>
                <img src="logo.jpg" alt="logo"/>
            </div>
            <div>  
                <h1 className='titulo'>Oh la la bombones! </h1>
            </div>
            <ul className='navbar'>
                <li><button>Inicio</button></li>
                <li><button>Productos</button></li>
                <li><button>Nosotros</button></li>
                <li><button>Contacto</button></li>
            </ul>
            <CartWidget />
        </header>
    )
}
export default NavBar