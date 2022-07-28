import classnames from 'classnames/bind';
import styles from './SimCard.scss';
import Button from '../../../../../components/Button';
const cx = classnames.bind(styles);

function SimCard({ title, image, children }) {
    return (
        <div className={cx("simCard-item")}>
            <div className={cx("simCard-image")}>
                <img src={image} alt="" />
            </div>
            <h2 className={cx("simCard-title")}>{title}</h2>
            <p className={cx("simCard-description")}>
                {children}
            </p>
            <Button outline className={cx('simCard-btn')}>Xem thêm</Button>
        </div>
    )
}

export default SimCard