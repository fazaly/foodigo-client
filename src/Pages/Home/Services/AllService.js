import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const AllService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://b6a11-service-review-server-side-fazaly.vercel.app/all-services')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setServices(data);
            })
    }, [])
    return (
        <div>
            <section className=" text-gray-600">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <div className="grid justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        {
                            services.sort((a, b) => b.time - a.time).map(service => <ServiceCard
                                key={service._id}
                                service={service}
                            ></ServiceCard>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AllService;