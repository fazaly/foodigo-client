import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const AddService = () => {
    const {user} = useContext(AuthContext);
    const data = new Date();

    const handlePlaceOrder = event => {
        event.preventDefault();

        const form = event.target;
        const service = form.service.value;
        const price = form.price.value;
        const photoURL = form.photoURL.value
        const email = user?.email || 'unregistered';
        const message = form.message.value;
        console.log(service, price, email, photoURL, message);

        const serviceCollection = {
            serviceName: service,
            image: photoURL,
            price: price,
            email: email,
            message: message,
            time: data.getTime()
        }

        // create services
        fetch('https://b6a11-service-review-server-side-fazaly.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(serviceCollection)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Service placed Successfully')
                form.reset();
            }
            console.log(data)})
        .catch(error => console.error(error))
    }

    return (
        <div className='mb-6'>
            <form onSubmit={handlePlaceOrder}>
                <div className='px-6'>
                    <h2 className='text-4xl mb-2'>You are about to add Service: {}</h2>
                </div>
                <div className='grid grid-cols-1 p-6 lg:grid-cols-2 gap-4'>
                    <input type="text" name='service' placeholder="Service Name" className="input input-bordered w-full" />
                    <input type="text" name='photoURL' src="" alt="" placeholder='Your Photo' className="input input-bordered w-full" />
                    <input type="text" name='price' placeholder="Price" required className="input input-bordered w-full" />
                    <input type="text" name='email' defaultValue={user?.email} placeholder="Your Email" className="input input-bordered w-full" readOnly />
                </div>
                <div className='p-6'>
                    <textarea className="textarea textarea-primary h-24 w-full" name='message' placeholder="Bio" required></textarea>
                </div>
                <div className='px-6'>
                    <input className='btn btn-accent text-white' type="submit" value="Place Your Order" />
                </div>
            </form>
        </div>
    );
};

export default AddService;