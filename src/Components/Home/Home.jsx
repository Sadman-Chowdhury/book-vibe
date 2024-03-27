import { Link } from 'react-router-dom';
import Books from '../Books/Books';
import '../Font/font.css'

const Home = () => {
    return (
        <div className='mt-10'>
            {/* Banner */}
            <div className='flex flex-col-reverse lg:flex-row justify-center items-center gap-8 lg:gap-[130px] bg-[#1313130D] p-10 lg:p-20 rounded-3xl'>
                <div className= 'space-y-10'>
                    <p className="text-2xl lg:text-[56px] font-bold playfair">Books to freshen up</p>
                    <p className="text-2xl lg:text-[56px] font-bold playfair">your bookshelf</p>
                    <div><Link to="/listedBooks"><button className='bg-[#23BE0A] p-4 rounded-lg font-bold text-[20px] text-white work-sans'>View The List</button></Link></div>
                </div>
                <div>
                    <img src="https://i.ibb.co/jk8Bvvd/713be2009ed5e0a38a726ba628d93944.png" className='h-[300px] lg:h-[400px]' alt="" />
                </div>
            </div>
            <Books></Books>
        </div>
    );
};

export default Home;