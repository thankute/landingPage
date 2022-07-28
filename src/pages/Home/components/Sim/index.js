import classnames from 'classnames/bind';
import styles from './Sim.scss';
import SimCard from './SimCard';
import img1 from '../../Images/Group4621.png'
import img2 from '../../Images/Group4647.png'
import img3 from '../../Images/Group4623.png'
import img4 from '../../Images/Group4653.png'

const cx = classnames.bind(styles);

function Sim() {

    return (
        <div id="sim" className={cx("content sim")}>
            <h3 className={cx("text-content")}>SIM SỐ - CHỌN SỐ ONLINE</h3>
            <div className={cx("content-wrapper")}>
                <SimCard title='Sim theo tên' image={img1}>
                    Kho sim số đẹp từ website chonso.mobifone.vn với hàng triệu sim số đẹp cho bạn lựa chọn, giá cả hấp dẫn, hỗ trợ giao sim miễn phí tại nhà,....
                </SimCard>
                <SimCard title='Sim số đẹp' image={img2}>
                    Kho sim số đẹp từ website chonso.mobifone.vn với hàng triệu sim số đẹp cho bạn lựa chọn, giá cả hấp dẫn, hỗ trợ giao sim miễn phí tại nhà,....
                </SimCard>
                <SimCard title='Sim phong thuỷ' image={img3}>
                    Kho sim số đẹp từ website chonso.mobifone.vn với hàng triệu sim số đẹp cho bạn lựa chọn, giá cả hấp dẫn, hỗ trợ giao sim miễn phí tại nhà,....
                </SimCard>
                <SimCard title='Sim đôi' image={img4}>
                    Kho sim số đẹp từ website chonso.mobifone.vn với hàng triệu sim số đẹp cho bạn lựa chọn, giá cả hấp dẫn, hỗ trợ giao sim miễn phí tại nhà,....
                </SimCard>
            </div>
        </div>
    )
}

export default Sim