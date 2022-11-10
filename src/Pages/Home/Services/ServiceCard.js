import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({service}) => {
    const { _id, serviceName, price, message, image } = service;
    return (
        <div>
            <div className="bg-base-200 shadow-xl max-w-sm mx-auto group">
            <PhotoProvider>
                <PhotoView src={image}>
                    <img className="p-2 object-cover w-full rounded h-44 bg-gray-500" src={image} alt="" />
                </PhotoView>
            </PhotoProvider>
                <div className="p-6 space-y-2">
                    <h3 className="text-3xl font-semibold">{serviceName}</h3>
                    <span className="text-2xl dark:text-gray-400">Price: ${price}</span>
                    <p>{message.slice(0, 100) + "..."}</p>
                </div>
                <div className='text-center p-4'>
                    <Link to={`/services/${_id}`}><button className='btn btn-warning'>Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;