import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import DetailReview from './DetailReview';

const MyReview = () => {
    const {user, logOut} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`,{
            // json web token
            headers: {
                authorization:  `Bearer ${localStorage.getItem('FOODIGO-token')}`
            }
        })
        .then(res => {
            if(res.status === 401 || res.status === 403){
                return logOut()
            }
            return res.json()
        })
        .then(data => {
            // console.log('received', data);
            setReviews(data)
        })
    }, [user?.email, refresh, logOut])

    // delete review item
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/review/${id}`,{
            method: 'DELETE',
            authorization:  `Bearer ${localStorage.getItem('FOODIGO-token')}`
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                toast.success('Deleted Successfully');
                setRefresh(!refresh);
                console.log(data)
            }
        })
    }

    const handleUpdate = (id) => {
        navigate(`/reviews/update/${id}`)
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
                            reviews.sort((a, b) => b.time - a.time).map(review => <DetailReview
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}
                                handleUpdate={handleUpdate}
                            ></DetailReview>)
                    }
                </table>
            </div>
        </div>
    );
};

export default MyReview;