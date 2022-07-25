import classnames from "classnames/bind"
import Navbar from "../Navbar";
import styles from './Header.scss';
import banner from '../../assets/images/CS60-01 1.png'

const cx = classnames.bind(styles);

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