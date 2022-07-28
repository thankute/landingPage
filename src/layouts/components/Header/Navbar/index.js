import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Navbar.scss';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';
const cx = classNames.bind(styles)

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <nav className={cx('navbar')}>
            <Link to='/' >
                <img src={logo} alt='' className={cx('logo')} />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <div className={click ? 'overlay' : ''}></div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Trang chủ
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link
                        to='/services'
                        className='nav-links'
                        onClick={closeMobileMenu}
                    >
                        Sim số
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link
                        to='/products'
                        className='nav-links'
                        onClick={closeMobileMenu}
                    >
                        Gói cước
                    </Link>
                </li>

                <li className='nav-item'>
                    <Link
                        to='/sign-up'
                        className='nav-links'
                        onClick={closeMobileMenu}
                    >
                        Tin tức
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link
                        to='/sign-up'
                        className='nav-links'
                        onClick={closeMobileMenu}
                    >
                        Hỗ trợ
                    </Link>
                </li>
                <span>
                    <Link to='/sign-in' className='sign-btn' onClick={closeMobileMenu}>Đăng nhập</Link>
                    <span></span>
                    <Link to='/sign-up' className='sign-btn' onClick={closeMobileMenu}>Đăng ký</Link>
                </span>
            </ul>
        </nav>
    )
}

export default Navbar