import img1 from '../assets/img/img1.jpg';
import img2 from '../assets/img/img2.jpg';
import img3 from '../assets/img/img3.jpg';
import img4 from '../assets/img/img4.jpg';
import comtom from '../assets/img/comtom.jpg';
import pizza from '../assets/img/pizza.jpg';
import DishesCard from '../layouts/DishesCard';

const Dishes = () => {
    return (
        <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
            <h1 className=" text-4xl font-semibold text-center pt-24 pb-10">
                Món ăn nổi bật
            </h1>

            <div className=" flex flex-wrap gap-8 justify-center">
                <DishesCard
                    img={img1}
                    title="Gà nướng than"
                    price="190.000 VND"
                />
                <DishesCard
                    img={img2}
                    title="Bò miếng nướng BBQ"
                    price="250.000 VND"
                />
                <DishesCard
                    img={img3}
                    title="Nui xào cà chua"
                    price="80.000 VND"
                />
                <DishesCard
                    img={img4}
                    title="Thịt xiên nướng"
                    price="60.000 VND"
                />
                <DishesCard img={pizza} title="Pizza" price="150.000 VND" />
                <DishesCard
                    img={comtom}
                    title="Cơm sốt cà ri tôm"
                    price="95.000 VND"
                />
            </div>
        </div>
    );
};

export default Dishes;
