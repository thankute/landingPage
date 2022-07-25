import classnames from 'classnames/bind';
import styles from './Home.scss';
import Affiliate from '../../components/Affiliate';
import SubscriptionFee from '../../components/SubscriptionFee';
import Sim from '../../components/Sim';
import SignBanner from '../../components/SignBanner';
import Footer from '../../components/Footer';

const cx = classnames.bind(styles);

function Home() {
    return (
        <div id="container">
            <div class="sign-contact phone"><i class="fa-solid fa-phone"></i></div>
            <div class="sign-contact message"><i class="fa-solid fa-comments"></i></div>
            <Affiliate />
            <div className={cx('data-background')}>
                <SubscriptionFee />
            </div>
            <Sim />
            <SignBanner />
            <Footer />
        </div>
    )
}

export default Home