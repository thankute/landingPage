import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from './SignUp.scss'

const cx = classNames.bind(styles)

function SignUp() {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className={cx('mt content ')}>
            <div className={cx('signUp login-form ')}>
                <h2>Đăng ký</h2>
                <form onSubmit={handleSubmit} method="POST" >
                    <div>
                        <label>Họ Tên</label>
                        <input type="text" placeholder="Nhập email hoặc số điện thoại..." required />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" placeholder="Nhập email hoặc số điện thoại..." required />
                    </div>
                    <div>
                        <label>Tài khoản</label>
                        <input type="text" placeholder="Nhập email hoặc số điện thoại..." required />
                    </div>
                    <div>
                        <label>Mật khẩu</label>
                        <input type="password" placeholder="Nhập mật khẩu..." required />
                    </div>
                    <div>
                        <label>Nhập lại mật khẩu</label>
                        <input type="password" placeholder="Nhập mật khẩu..." required />
                    </div>
                    <button type="submit" className={cx('login-btn')}>Đăng ký</button>
                </form>
                <hr></hr>
                <p>Đã có tài khoản? <Link to='/'>Đăng nhập</Link> ngay!</p>
            </div>
        </div>
    )
}

export default SignUp