import React from 'react';

const DetailReview = ({review, handleDelete, handleUpdate}) => {
    const {_id, image, email, serviceName, rating, message, status
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
            <td className="p-3 text-right">
                <label htmlFor="Toggle3" className="inline-flex items-center p-2 rounded-md cursor-pointer text-gray-800">
                    <input id="Toggle3" type="checkbox" className="hidden peer" />
                    <span onClick={() => handleDelete(_id)} className="text-[15px] text-white px-4 py-2 rounded-l-md bg-violet-400 peer-checked:bg-gray-300">Delete</span>
                    <span onClick={() => handleUpdate(_id)} className="text-[15px] px-4 py-2 rounded-r-md bg-gray-300 peer-checked:bg-violet-400">{ status ? status : 'Pending'}</span>
                </label>
            </td>
        </tr>
        </tbody>
    );
};

export default DetailReview;