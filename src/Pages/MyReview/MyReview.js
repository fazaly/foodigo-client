import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import DetailReview from './DetailReview';

const MyReview = () => {
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [user?.email])

    const handleDelete = (id) => {
        console.log(id);
    }

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
                            <th className="p-3">Status</th>
                        </tr>
                    </thead>
                    {
                            reviews.map(review => <DetailReview
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}
                            ></DetailReview>)
                    }
                </table>
            </div>
        </div>
    );
};

export default MyReview;