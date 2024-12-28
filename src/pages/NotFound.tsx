
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col justify-center place-items-center w-full">
            <h1 className='text-red-600 text-5xl mt-4'>Page Not Found </h1>
            <h5 className='flex text-red-500 text-3xl'>404 ERROR</h5>
            <Link to="/" className='text-slate-600 text-xl mt-3'> BACK TO HOME</Link>
            <div className='mt-4'>
                <img src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?q=80&w=2858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                   alt="page not found" className='object-contain contain-layout'/>
            </div>
        </div>
    );
};

export default NotFound;