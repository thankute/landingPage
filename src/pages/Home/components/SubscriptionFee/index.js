import classnames from "classnames/bind"
import styles from './SubscriptionFee.scss'
import SubCard from './SubCard';
import { useState, useEffect } from "react";

const cx = classnames.bind(styles);

function SubscriptionFee() {
    const [isMobile, setIsMobile] = useState(false);

    const showMobile = () => {
        if (window.innerWidth <= 740) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    useEffect(() => {
        showMobile();
    }, []);

    window.addEventListener('resize', showMobile);

    return (
        <div id="data" className={cx("content data")}>
            <h3 className={cx("text-content")}>GÓI CƯỚC DI ĐỘNG</h3>
            <div className={cx("choice-wrapper")}>
                <span className={cx("content-choice")}>Gói hot</span>
                <span className={cx("content-choice")}>Trả sau</span>
                <span className={cx("content-choice")}>Trả trước</span>
                <span className={cx("content-choice")}>Data</span>
            </div>
            <div className={cx("content-wrapper")}>
                {
                    isMobile ? (
                        <SubCard />
                    )
                        : (
                            <>
                                <SubCard />
                                <SubCard />
                                <SubCard />
                                <SubCard />
                            </>
                        )
                }
                <div className="next-button hide prev"><i className="fa-solid fa-arrow-left"></i></div>
                <div className="next-button hide next"><i className="fa-solid fa-arrow-right"></i></div>
            </div>
        </div>
    )
}

export default SubscriptionFee