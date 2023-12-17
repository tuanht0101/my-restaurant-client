import { useState } from 'react';
import { Link } from 'react-scroll';
import { BiRestaurant } from 'react-icons/bi';

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const closeMenu = () => {
        setMenu(false);
    };

    return (
        <div className=" fixed w-full">
            <div>
                <div className=" flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                    <div className=" flex flex-row items-center">
                        <span>
                            <BiRestaurant size={32} />
                        </span>
                        <h1 className=" text-xl font-semibold">
                            <div className="flex flex-row">
                                Mid{' '}
                                <p className="text-[#FF9F0D]">taste &nbsp;</p>
                                Restaurant
                            </div>
                        </h1>
                    </div>

                    <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
                        <Link
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-brightColor transition-all cursor-pointer"
                        >
                            Trang chủ
                        </Link>

                        <Link
                            to="dishes"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-brightColor transition-all cursor-pointer"
                        >
                            Món ăn nổi bật
                        </Link>

                        <Link
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-brightColor transition-all cursor-pointer"
                        >
                            Về chúng tôi
                        </Link>

                        <Link
                            to="staff"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-brightColor transition-all cursor-pointer"
                        >
                            Nhân sự
                        </Link>

                        <Link
                            to="review"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-brightColor transition-all cursor-pointer"
                        >
                            Đánh giá
                        </Link>
                    </nav>

                    {/* <div className="md:hidden flex items-center">
                        {menu ? (
                            <AiOutlineClose size={25} onClick={handleChange} />
                        ) : (
                            <AiOutlineMenuUnfold
                                size={25}
                                onClick={handleChange}
                            />
                        )}
                    </div> */}
                </div>
                <div
                    className={` ${
                        menu ? 'translate-x-0' : '-translate-x-full'
                    } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
                >
                    <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="hover:text-brightColor transition-all cursor-pointer"
                        onClick={closeMenu}
                    >
                        Home
                    </Link>
                    <Link
                        to="dishes"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="hover:text-brightColor transition-all cursor-pointer"
                        onClick={closeMenu}
                    >
                        Dishes
                    </Link>
                    <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="hover:text-brightColor transition-all cursor-pointer"
                        onClick={closeMenu}
                    >
                        About
                    </Link>
                    <Link
                        to="menu"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="hover:text-brightColor transition-all cursor-pointer"
                        onClick={closeMenu}
                    >
                        Menu
                    </Link>
                    <Link
                        to="review"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className=" hover:text-brightColor transition-all cursor-pointer"
                        onClick={closeMenu}
                    >
                        Reviews
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
