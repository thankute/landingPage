import classnames from 'classnames/bind';
import styles from './Footer.scss';
import osp from './Images/image11.png';
import zalo from './Images/image18.png';

const cx = classnames.bind(styles);


function Footer() {
    return (
        <div id="footer" className={cx("footer")}>
            <div className={cx("footer-wrapper")}>
                <div className={cx("footer-logo")}>
                    <img src={osp} alt="OSP" />
                </div>
                <div className={cx("footer-imfomation")}>
                    <h4>Thông tin chung</h4>
                    <p>Giới thiệu</p>
                    <p>Hướng dẫn tham gia</p>
                    <p>Chính sách hoa hồng</p>
                    <p>Danh sách điểm hòa mạng</p>
                    <p>Các câu hỏi thường gặp</p>
                </div>
                <div className={cx("footer-contact")}>
                    <h4>Liên hệ</h4>
                    <p>Website: congtacvien.mobifone.vn</p>
                    <p>Hotline: 0987.654.321</p>
                    <p>Email: congtacvien.mobifone@osp.com.vn</p>
                </div>
                <div className={cx("footer-social")}>
                    <h2><span>mobi</span><span>fone</span></h2>
                    <p>Chương trình Tiếp thị liên kết từ Cộng tác viên MobiFone với mức hoa hồng hấp dẫn!</p>
                    <div>
                        <span>
                            <a href="Telegram.com" alt='' target='_blank'>
                                <i className="tele fa-brands fa-telegram"></i>
                            </a>
                        </span>
                        <span>
                            <a href="Facebook.com" alt='' target='_blank'>
                                <i className="fb fa-brands fa-facebook"></i>
                            </a>
                        </span>
                        <span>
                            <a href="Zalo.com" alt='' target='_blank'>
                                <img className="zalo" src={zalo} alt="" />
                            </a>
                        </span>
                        <span>
                            <a href="Twitter.com" alt='' target='_blank'>
                                <i className="twitter fa-brands fa-twitter-square"></i>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <p className={cx("footer-copyright")}>
                    Copyright © 2015 CÔNG TY CỔ PHẦN TẬP ĐOÀN CÔNG NGHỆ OSP | Địa chỉ: Tầng 7, Toà Nhà Đại Phát, số
                    82, Phố Duy Tân, Cầu Giấy, Hà Nội. | Điện thoại: +84-24-3568 2502 - Fax: +84-24-3568 2504
                </p>
            </div>
        </div>
    )
}

export default Footer