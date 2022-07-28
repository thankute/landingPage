import classNames from "classnames/bind"
import Navbar from "./Navbar";
import styles from './Header.module.scss';
import banner from './Images/slider.png'

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('header')}>
            <Navbar />
            <div className={cx("image")}>
                <img className={cx("image")} src={banner} alt='Mobifone' />
            </div>
        </div>
    )
}

export default Header