
const Review = ({review}) => {
    const {bookId, bookName, userName, userReview, rating} = review

    return (
        <div>
            <div className="work-sans border rounded-2xl p-10">
                        <div className="space-y-3">
                            <h1 className="text-[24px] font-bold playfair">{bookName}</h1>
                            <p className="text-[16px] font-medium text-[#131313B3]">Comment: {userReview}</p>
                            <p className="text-[16px] font-medium">Reader: {userName}</p>
                            <hr className="border-dashed"/>
                            <div className="flex gap-6">
                                <span className="px-5 py-2 bg-orange-100 rounded-[30px] text-[#FFAC33]">Rating: {rating}</span>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default Review;