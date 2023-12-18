import img from '../assets/img/about.png';

const About = () => {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
            <img src={img} alt="img" />

            <div className=" space-y-4 lg:pt-14">
                <h1 className=" font-semibold text-4xl text-center md:text-start">
                    Tại sao nên chọn Midtaste?
                </h1>
                <p>
                    Chúng tôi là điểm đến lý tưởng cho những trải nghiệm ẩm thực
                    tuyệt vời. Tại nhà hàng của chúng tôi, chất lượng thực phẩm
                    luôn là ưu tiên hàng đầu. Chúng tôi chỉ sử dụng nguyên liệu
                    tươi ngon và chọn lọc để đảm bảo mọi bữa ăn đều ngon miệng
                    và dinh dưỡng. Đội ngũ đầu bếp của chúng tôi được đào tạo
                    chuyên sâu và có kinh nghiệm trong việc chế biến các món ăn
                    ngon nhất. Sự sáng tạo và tình yêu thực phẩm của họ đảm bảo
                    mỗi bữa ăn là một tác phẩm nghệ thuật.
                </p>
                <p>
                    Với không gian nội thất sang trọng và ấm áp, nhà hàng chúng
                    tôi tạo ra một không khí thoải mái và thư giãn. Đây là nơi
                    lý tưởng để bạn thưởng thức bữa ăn cuối tuần, gặp gỡ bạn bè
                    hoặc tổ chức các sự kiện quan trọng. Menu của chúng tôi được
                    thiết kế đa dạng, từ các món ăn truyền thống đến những sáng
                    tạo mới lạ. Khám phá đặc sản của chúng tôi và tận hưởng một
                    hành trình ẩm thực độc đáo.
                </p>
                <p>
                    Vậy nên các quý khách hàng có thể tới địa chỉ Số 531, đường
                    Trần Phú, thành phố Hà Tĩnh để có thể tận hưởng những bữa ăn
                    chất lượng hàng đầu.
                </p>
            </div>
        </div>
    );
};

export default About;
