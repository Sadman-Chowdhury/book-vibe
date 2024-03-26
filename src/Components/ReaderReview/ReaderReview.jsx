import { useEffect, useState } from "react";
import '../Font/font.css'
import Review from "../Review/Review";

const ReaderReview = () => {
    const [reviews, setReviews] = useState([])

    useEffect(()=>{
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

    return (
        <div className='mt-10'>
            <div className="bg-gray-100 rounded-2xl text-center">
                <h1 className="text-3xl font-bold work-sans p-7 mb-7">Reader's Review</h1>
            </div>
            <div className="grid grid-cols-2 gap-5">
                {
                    reviews.map(review=><Review key={review.id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default ReaderReview;