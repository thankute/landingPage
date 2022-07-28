import classnames from "classnames/bind"
import styles from './SubCard.scss'
import Button from '../../../../../components/Button';

const cx = classnames.bind(styles);

function SubCard() {
    return (
        <div className={cx("subCard-item")}>
            <span className={cx("hot")}>
                <p>HOT</p>
                <span></span>
            </span>
            <span className={cx("subCard-title")}>
                <h3>6CS50</h3>
            </span>
            <div className={cx("subCard-list")}>
                <span className={cx("subCard-list__item")}>8GB tốc độ cao</span>
                <span className={cx("subCard-list__item")}>30 phút nội mạng</span>
                <span className={cx("subCard-list__item")}>120.000VNĐ</span>
                <span className={cx("subCard-list__item")}>30 ngày</span>
                <span className={cx("subCard-list__item")}>90 ngày</span>
            </div>
            <div className={cx("subCard-more")}>
                <Button outline>
                    Xem chi tiết
                </Button>
                <Button primary small >
                    Đăng ký
                </Button>
            </div>
        </div>
    )
}

export default SubCard