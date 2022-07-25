import classnames from 'classnames/bind';
import styles from './SimCard.scss';
import Button from '../../Button'
const cx = classnames.bind(styles);

function SimCard({ title, image, children }) {
    return (
        <div class={cx("simCard-item")}>
            <div class={cx("simCard-image")}>
                <img src={image} alt="" />
            </div>
            <h2 class={cx("simCard-title")}>{title}</h2>
            <p class={cx("simCard-description")}>
                {children}
            </p>
            <Button outline className={cx('simCard-btn')}>Xem thêm</Button>
        </div>
    )
}

export default SimCard