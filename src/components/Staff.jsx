import DishesCard from '../layouts/DishesCard';
import chef1 from '../assets/img/chef1.jpg';
import chef2 from '../assets/img/chef2.jpg';
import chef3 from '../assets/img/chef3.jpg';

const Staff = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
            <h1 className=" text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
                Nhân sự
            </h1>

            <div className=" flex flex-wrap gap-8 justify-center w-full">
                <DishesCard img={chef1} title="Bếp phó" price="Jeremy Daltin" />
                <DishesCard
                    img={chef2}
                    title="Bếp trưởng"
                    price="Martin Russel"
                />
                <DishesCard img={chef3} title="Bếp phó" price="Jarvis Tirell" />
            </div>
        </div>
    );
};

export default Staff;
