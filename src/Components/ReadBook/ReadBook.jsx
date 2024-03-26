const ReadBook = ({readBook}) => {
    const {bookName, author, image, rating, category, tags, review} = readBook
    return (
        <div className="flex flex-col lg:flex-row work-sans gap-10 mt-6">
                <div className="bg-gray-100 rounded-2xl flex justify-center p-8 w-full lg:w-1/2">
                    <img className="h-[560px]" src={image} alt="" />
                </div>
                <div className="w-full lg:w-1/2 space-y-6">
                    <h1 className="text-[40px] font-bold playfair">{bookName}</h1>
                    <p className="text-xl font-medium">By: {author}</p>
                    <hr className="border-dashed"/>
                    <div>
                        <span className="text-xl font-medium">{category}</span>
                    </div>
                    <hr className="border-dashed"/>
                    <p className="text-[#131313B3]"><span className="font-bold text-black">Review: </span>{review}</p>
                    <div className="space-x-5">
                        <span className="font-bold text-black">Tag</span>
                        <span className="text-[#23BE0A] bg-gray-100 px-4 py-1 rounded-[30px]">#{tags[0]}</span>
                        <span className="text-[#23BE0A] bg-gray-100 px-4 py-1 rounded-[30px]">#{tags[1]}</span>
                    </div>
                    <hr className="border-dashed"/>
                    <div className="flex gap-16">
                        <div className="text-[#131313B3] space-y-3">
                            <p>Number of Pages: </p>
                            <p>Publisher: </p>
                            <p>Year of Publishing: </p>
                            <p>Rating: </p>
                        </div>
                        <div className="font-semibold space-y-3">
                            {/* <p>{readBook.totalPages}</p>
                            <p>{readBook.publisher}</p>
                            <p>{readBook.yearOfPublishing}</p>
                            <p>{readBook.rating}</p> */}
                        </div>
                    </div>
                    <button  className="border px-7 py-4 rounded-lg font-semibold mr-7">Read</button>
                    <button className="border px-7 py-4 rounded-lg font-semibold bg-[#50B1C9] text-white">Wishlist</button>
                </div>
            </div>
    );
};

export default ReadBook;