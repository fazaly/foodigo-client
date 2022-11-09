import React from 'react';

const SingleReview = ({review}) => {
    const {image, email, serviceName, rating, message
    } = review;
    return (
        <tbody>
            <tr className="border-b border-opacity-20  text-white border-gray-700 bg-gray-900">
            <td className="p-3">
                <p>{serviceName}</p>
            </td>
            <td>
                <span className=" p-6 font-semibold rounded-md mb-10 text-white">
                    <span className='text-center'>{message}</span>
                </span>
            </td>
            <td className="p-3">
                <p>{email}</p>
            </td>
            <td className="p-3">
                <img src={image} alt="" />
            </td>
            <td className="p-3">
                <p>{rating}</p>
            </td>
        </tr>
        </tbody>
    );
};

export default SingleReview;