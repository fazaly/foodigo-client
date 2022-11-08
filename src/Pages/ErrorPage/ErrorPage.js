import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
    return (
        <div className='title'>
            <div className="text-center text-info">
                <h1 className="text-9xl text-red-500 mb-2">404</h1>
                <p className="text-2xl text-black"> <span className="text-red-700 text-2xl">Opps!</span> Page not found.</p>
                <p className="lead text-black mb-5">
                    The page you're looking for doesn't exist.
                </p>
                <Link to='/' className="btn btn-warning">Back To Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;