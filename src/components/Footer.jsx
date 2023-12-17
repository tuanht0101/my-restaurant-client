const Footer = () => {
    return (
        <div className=" bg-black text-white rounded-t-3xl mt-8 md:mt-0">
            <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
                <div className=" w-full md:w-1/4">
                    <h1 className=" font-semibold text-xl pb-4">
                        <div className="flex flex-row">
                            Mid <p className="text-[#FF9F0D]">taste &nbsp;</p>
                            Restaurant
                        </div>
                    </h1>
                    <p className=" text-sm">
                        Đem lại trải nghiệm tốt nhất cho bữa ăn của bạn.
                    </p>
                </div>
                <div>
                    <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">
                        Liên hệ
                    </h1>
                    <nav className=" flex flex-col gap-2">
                        <p
                            className=" hover:text-brightColor transition-all cursor-pointer"
                            href="/"
                        >
                            admin@midtaste.com
                        </p>
                        <p className=" hover:text-brightColor transition-all cursor-pointer">
                            +84 911095607
                        </p>

                        <p className=" hover:text-brightColor transition-all cursor-pointer">
                            Số 531, đường Trần Phú, thành phố Hà Tĩnh
                        </p>
                    </nav>
                </div>
            </div>
            <div>
                <p>
                    <p className=" text-center py-4">
                        @copyright developed by
                        <span className=" text-brightColor">
                            {' '}
                            Tran Hoang Minh Tuan
                        </span>{' '}
                        | All rights reserved
                    </p>
                </p>
            </div>
        </div>
    );
};

export default Footer;
