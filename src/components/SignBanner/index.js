import classnames from 'classnames/bind';
import styles from './SignBanner.scss';
import girl from '../../assets/images/151.png';
const cx = classnames.bind(styles);

function SignBanner() {
    return (
        <div className={cx("sign")}>
            <div className={cx("sign-wrapper")}>
                <div className={cx("sign-content")}>
                    <h3 className={cx("sign-title")}>Đăng ký, hợp tác cùng Cộng tác viên MobiFone ngay từ hôm nay!</h3>
                    <p className={cx("sign-description")}>
                        Hoàn toàn miễn phí. Chỉ trong 01 phút. Để có thêm nguồn thu nhập mới từ sự ảnh hưởng của
                        bạn trên Internet. Với sự bảo đảm và hỗ trợ chuyên nghiệp từ Cộng tác viên MobiFone
                    </p>
                    <button>Đăng ký miễn phí</button>
                </div>
                <img src={girl} alt="girl" />
            </div>
        </div>
    )
}

export default SignBanner