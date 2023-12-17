import ReviewCard from '../layouts/ReviewCard';
import img1 from '../assets/img/pic1.png';
import img2 from '../assets/img/pic2.png';
import img3 from '../assets/img/pic3.png';

const Review = () => {
    return (
        <div className=" min-h-screen flex flex-col items-center justify-center md:px-32 px-5">
            <h1 className=" text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">
                Đánh giá của khách hàng
            </h1>
            <div className=" flex flex-col md:flex-row gap-5 mt-5">
                <ReviewCard
                    review={
                        'Nhà hàng này thực sự là một địa điểm lý tưởng cho những người yêu thích ẩm thực Ý. Pizza ở đây thơm ngon và có lớp vỏ giòn rất đặc trưng. Đồ uống phong phú và hợp khẩu vị. Không gian thoải mái và ấm cúng, phù hợp để tụ tập gia đình hoặc bạn bè.'
                    }
                    img={img1}
                    name="Sophia Azura"
                />
                <ReviewCard
                    review={
                        'Chúng tôi đã chọn nhà hàng này cho bữa tiệc gia đình và thật sự hài lòng. Menu có nhiều lựa chọn phong phú từ món trẻ em đến món cho người lớn. Nhân viên rất chu đáo và phục vụ nhanh chóng, điều này thật sự quan trọng khi bạn có trẻ nhỏ đang đói. Không gian thoải mái và phù hợp cho gia đình.'
                    }
                    img={img2}
                    name="Tim Carrol"
                />
                <ReviewCard
                    review={
                        'Tôi đã có một trải nghiệm tuyệt vời tại nhà hàng này. Hải sản tươi ngon và được chế biến một cách sáng tạo. Đặc biệt, tôi thích cách họ kết hợp các loại hải sản để tạo nên những món ăn hấp dẫn. Phục vụ nhanh chóng và nhân viên rất nhiệt tình. Tôi chắc chắn sẽ quay lại!'
                    }
                    img={img3}
                    name="Linh Dang"
                />
            </div>
        </div>
    );
};

export default Review;
