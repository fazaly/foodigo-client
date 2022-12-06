import React from 'react';
import DeliciousCard from './DeliciousCard';

const Delicious = () => {

    const deliciousItems = [
        {
            'id': '1',
            'img': 'https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
            'title': 'Crispy Fry Burger',
            'details' : 'Howdy Special, A well-seasoned, crispy fried chicken fillet slathered with a...',
        },
        {
            'id': '2',
            'img': 'https://images.unsplash.com/photo-1596649299486-4cdea56fd59d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            'title': 'Fandango Burger',
            'details' : 'Potato skins, chicken strips, toasted ravioli and mozzarella sticks served with...',
        },
        {
            'id': '3',
            'img': 'https://images.unsplash.com/photo-1633424234673-c8cd0f4df77b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            'title': 'Wrangler Burger',
            'details' : 'Blackened chicken, sauteed onions and peppers smothered with pepper jack and...',
        }
    ]
        
    

    return (
        <div>
            <h1 className='text-5xl text-center font-bold text-gray-600 mt-20'>Super Delicious Deal</h1>
            <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 mb-10'>
                {
                    deliciousItems.map(delicious => <DeliciousCard
                    key={delicious.id}
                    delicious={delicious}
                    ></DeliciousCard> )
                }
            </div>
        </div>
    );
};

export default Delicious;