import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setServices(data);
            })
    }, [])
    return (
        <div>
            <section className=" text-gray-600">
                <h1 className='text-5xl text-center font-bold text-gray-600'>All Services</h1>
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            services.map(service => <ServiceCard
                                key={service._id}
                                service={service}
                            ></ServiceCard>)
                        }
                    </div>
                    <div className="flex justify-center">
                        <Link to='/allservices'><button type="button" className="px-6 py-3 text-[15px] rounded-md  bg-yellow-400 text-gray-700">Load more services...</button></Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;