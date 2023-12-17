const Home = () => {
    return (
        <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-no-repeat ">
            <div className=" w-full lg:w-2/3 space-y-5">
                <h1 className=" text-backgroundColor font-semibold text-6xl">
                    Đem lại trải nghiệm tốt nhất cho bữa ăn của bạn.
                </h1>
                <p className=" text-backgroundColor">
                    Sự hài lòng của khách hàng khi đến ăn chính là niềm động lực
                    to lớn cho sự phát triển của chúng tôi.
                </p>
            </div>
        </div>
    );
};

export default Home;
