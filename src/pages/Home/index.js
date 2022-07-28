import classNames from 'classnames/bind';
import styles from './Home.scss';
import Affiliate from './components/Affiliate';
import SubscriptionFee from './components/SubscriptionFee';
import Sim from './components/Sim';
import SignBanner from './components/SignBanner';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div id="container">
            <div className="sign-contact phone"><i className="fa-solid fa-phone"></i></div>
            <div className="sign-contact message"><i className="fa-solid fa-comments"></i></div>
            <Affiliate />
            <div className={cx('data-background')}>
                <SubscriptionFee />
            </div>
            <Sim />
            <SignBanner />
        </div>
    )
}

export default Home