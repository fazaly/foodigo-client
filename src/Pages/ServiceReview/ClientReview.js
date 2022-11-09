import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';

const ClientReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    return (
        <div className="container p-2 mx-auto sm:p-4 text-gray-600 mt-10">
            <h2 className="mb-5 text-2xl font-semibold text-center text-gray-600 leading-tight">Customer Reviews</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-xs">
                    <colgroup>
                        <col/>
                        <col/>
                        <col/>
                        <col/>
                        <col className="w-24"/>
                    </colgroup>
                    <thead className="bg-gray-700 text-white">
                        <tr className="text-left">
                            <th className="p-3">Service Name</th>
                            <th className="p-3">Description</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">Image</th>
                            <th className="p-3">Ratings</th>
                        </tr>
                    </thead>
                    {
                            reviews.map(review => <SingleReview
                            key={review._id}
                            review={review}
                            ></SingleReview>)
                    }
                </table>
            </div>
        </div>
    );
};

export default ClientReview;