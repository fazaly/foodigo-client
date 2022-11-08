import React from 'react';

const DeliciousCard = ({delicious}) => {
    const {id, img, title, details} = delicious;
    return (
        <div className='card card-compact sm:w-96 sm:h-full bg-base-200 shadow-xl'>
            <div>
                <img src={img} alt="" className="w-full rounded-lg p-4 mb-2 h-60 sm:h-96" />
            </div>
            <div className="flex flex-wrap justify-between">
                <div className="space-x-2 p-6">
                <h2 className="mb-1 text-xl font-semibold">{title}</h2>
                <p className="text-sm text-gray-400">{details}</p>
                </div>
            </div>
        </div>
    );
};

export default DeliciousCard;