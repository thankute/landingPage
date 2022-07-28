import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from './SignIn.scss'

const cx = classNames.bind(styles)

function SignIn() {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className={cx('mt content ')}>
            <div className={cx('login-form')}>
                <h2>Đăng nhập</h2>
                <form onSubmit={handleSubmit} method="POST" >
                    <div>
                        <label>Tài khoản</label>
                        <input type="text" placeholder="Nhập email hoặc số điện thoại..." required />
                    </div>
                    <div>
                        <label>Mật khẩu</label>
                        <input type="password" placeholder="Nhập mật khẩu..." required />
                    </div>
                    <button type="submit" className={cx('login-btn')}>Đăng nhâp</button>
                </form>
                <div className={cx('smt')}>
                    <a href='/' className={cx('forget')} >Quên mật khẩu?</a>
                    <hr />
                    <Link to='/signup' className={cx('create-btn')}>Đăng ký</Link>
                </div>
            </div>
        </div>
    )
}

export default SignIn