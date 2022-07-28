import './Affiliate.scss'
import ShowCard from './ShowCard'
import img1 from '../../Images/Group3628.png'
import img2 from '../../Images/Group3629.png'
import img3 from '../../Images/Group3630.png'


function Affiliate() {
    return (
        <div className="content" >
            <h3 className="text-content">CHƯƠNG TRÌNH AFFILIATE</h3>
            <p>Tham gia kiếm tiền cùng cộng tác viên MobiFone</p>
            <div className="content-wrapper">
                <ShowCard title='Chính sách hoa hồng' image={img2} >
                    Cộng tác viên MobiFone luôn phát triển chính sách Hoa hồng hấp dẫn. Cam kết rõ ràng,
                    minh bạch, chính xác, kịp thời trong thanh toán và ghi nhận doanh thu cho mạng lưới CTV
                    và đối tác bán hàng
                </ShowCard>
                <ShowCard title='Thu nhập không giới hạn' image={img3} >
                    Chỉ cần bạn đầu tư thời gian, thu nhập của bạn là không giới hạn. Cộng tác viên MobiFone
                    thường xuyên cung cấp sản phẩm dịch vụ mới thúc đẩy doanh số hỗ trợ CTV phát triển kinh
                    doanh và gia tăng thu nhập
                </ShowCard>
                <ShowCard title='Đa dạng dịch vụ' image={img1}>
                    Sản phẩm, dịch vụ có trên Cộng tác viên MobiFone luôn được cập nhật kịp thời, đảm bảo
                    tính đa dạng, dễ kinh doanh và nhiều ưu đãi. Đây cũng là những dịch vụ viễn thông - sản
                    phẩm thông minh tốt nhất hiện nay
                </ShowCard>
            </div>
        </div>
    )
}

export default Affiliate