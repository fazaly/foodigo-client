import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../Hooks/UseTitle/UseTitle';
import banner from '../../assets/images/banner/eiliv-aceron-ZuIDLSz3XLg-unsplash.jpg'
import Delicious from './Delicious/Delicious';
import Services from './Services/Services';
import GetUpdate from './GetUpdate';

const Home = () => {

    useTitle('Home');

    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-3 mx-auto sm:py-12  lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none text-gray-600 sm:text-6xl">Order Healthy And Fresh Food Any Time
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">Italian food makes people think of big family dinners. So you may want to position your restaurant as a place to bring the whole family.
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <Link to='' className="px-8 py-3 text-lg font-semibold rounded bg-yellow-400 dark:text-gray-900">Subscribe</Link>
                        <Link to='' className="px-8 py-3 text-lg font-semibold border rounded border-gray-300">Ratings</Link>
                    </div>
                </div>
                <div className="p-6 text-center mt-8">
                    <img src={banner} alt="" className="max-w-sm md:max-w-md lg:max-w-md rounded-lg shadow-2xl" />
                </div>
            </div>
            <Services/>
            <Delicious/>
            <GetUpdate/>
        </section>
    );
};

export default Home;