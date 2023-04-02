import Region from '../assets/icons/region.svg';
import Customer from '../assets/icons/customer.svg';
import Cart from '../assets/icons/cart.svg';

const Header = ({ }) => {
    return (
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 px-3">
            <strong className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark fw-bolder" style={{fontSize:'1.4rem'}}>
                Demo-Shirt Design
            </strong>

            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li className="nav-link px-2 link-secondary"><a href="#" className='text-decoration-none me-2'>FABRIC</a><span/></li>
                <li className='nav-link px-2 link-dark active'><a href="#" className="text-decoration-none">STYLE</a></li>
                <li className='nav-link px-2 link-dark'><span/><a href="#" className="text-decoration-none ms-2">ACCENTS</a></li>
            </ul>

            <div className="col-md-3 text-end">
                <ul className="nav mb-2 justify-content-end mb-md-0">
                    <li>
                        <a href="#" className="nav-link px-2 link-dark">
                            <img src={Region} />
                        </a>
                    </li>
                    <li><a href="#" className="nav-link px-2 link-dark">
                        <img src={Customer} /></a></li>
                    <li><a href="#" className="nav-link px-2 link-dark"><img src={Cart} /></a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;