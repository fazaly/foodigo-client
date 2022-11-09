import React from 'react';

const ClientReview = () => {
    return (
        <div className="container p-2 mx-auto sm:p-4 text-gray-600 mt-10">
            <h2 className="mb-10 text-2xl font-semibold text-center text-gray-600 leading-tight">Customer Reviews</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-xs">
                    <colgroup>
                        <col/>
                        <col/>
                        <col/>
                        <col/>
                        <col className="w-24"/>
                    </colgroup>
                    <thead className="dark:bg-gray-700">
                        <tr className="text-left">
                            <th className="p-3">Image</th>
                            <th className="p-3">Service Name</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">Ratings</th>
                            <th className="p-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-opacity-20 text-white border-gray-700 bg-gray-900">
                            <td className="p-3">
                                <p>97412378923</p>
                            </td>
                            <td className="p-3">
                                <p>Microsoft Corporation</p>
                            </td>
                            <td className="p-3">
                                <p>14 Jan 2022</p>
                                <p className="dark:text-gray-400">Friday</p>
                            </td>
                            <td className="p-3">
                                <p>01 Feb 2022</p>
                                <p className="dark:text-gray-400">Tuesday</p>
                            </td>
                            <td>
                                <span className=" p-3 font-semibold rounded-md bg-violet-400 text-gray-900">
                                    <span className='px-3'>Pending</span>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ClientReview;