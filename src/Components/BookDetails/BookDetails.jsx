import { useLoaderData, useParams } from "react-router-dom";
import '../Font/font.css'

const BookDetails = () => {
    const books = useLoaderData()
    const {bookId} = useParams()
    const idInt = parseInt(bookId)
    const book = books.find(book => book.bookId === idInt)

    // const handleApplyJob = () => {
    //     saveJobApplication(idInt)
    //     toast('You have applied sucessfully')
    // }

    return (
        <div className="flex flex-col lg:flex-row work-sans gap-10 mt-6">
                <div className="bg-gray-100 rounded-2xl flex justify-center p-8 w-full lg:w-1/2">
                    <img className="h-[560px]" src={book.image} alt="" />
                </div>
                <div className="w-full lg:w-1/2 space-y-6">
                    <h1 className="text-[40px] font-bold playfair">{book.bookName}</h1>
                    <p className="text-xl font-medium">By: {book.author}</p>
                    <hr className="border-dashed"/>
                    <div>
                        <span className="text-xl font-medium">{book.category}</span>
                    </div>
                    <hr className="border-dashed"/>
                    <p className="text-[#131313B3]"><span className="font-bold text-black">Review: </span>{book.review}</p>
                    <div className="space-x-5">
                        <span className="font-bold text-black">Tag</span>
                        <span className="text-[#23BE0A] bg-gray-100 px-4 py-1 rounded-[30px]">#{book.tags[0]}</span>
                        <span className="text-[#23BE0A] bg-gray-100 px-4 py-1 rounded-[30px]">#{book.tags[1]}</span>
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
                            <p>{book.totalPages}</p>
                            <p>{book.publisher}</p>
                            <p>{book.yearOfPublishing}</p>
                            <p>{book.rating}</p>
                        </div>
                    </div>
                    <button className="border px-7 py-4 rounded-lg font-semibold mr-7">Read</button>
                    <button className="border px-7 py-4 rounded-lg font-semibold bg-[#50B1C9] text-white">Wishlist</button>
                </div>
            </div>
    );
};

export default BookDetails;