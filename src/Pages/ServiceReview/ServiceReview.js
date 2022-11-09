import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PlaceReview from './PlaceReview';
import ServiceDetailCard from './ServiceDetailCard';

const ServiceReview = () => {
    const [services, setServices] = useState([])
    const router = useParams();
    const {id} = router;
    // console.log(id);
    fetch(`http://localhost:5000/services/${id}`)
    .then(res => res.json())
    .then(data => setServices(data))
    

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                <section>
                    {
                        services.map(service => <ServiceDetailCard
                        key={service._id}
                        service={service}
                        ></ServiceDetailCard>)
                    }
                </section>
                <section>
                    {
                        services.map(service => <PlaceReview
                        key={service._id}
                        service={service}
                        >
                        </PlaceReview>)
                    }
                </section>
            </div>
            <section>
                <h3>review option</h3>
            </section>
        </div>
    );
};

export default ServiceReview;