import { FaRegStar } from "react-icons/fa";

const Book = ({book}) => {
    const {bookName, author, image, rating, category, tags} = book
    return (
        <div className="border p-6 rounded-2xl space-y-5">
            <div className="bg-gray-100 rounded-2xl flex justify-center p-8">
                <img className="h-[166px] w-auto" src={image} alt="" />
            </div>
            <div>
                <span className="text-[#23BE0A] bg-gray-100 px-4 py-1 rounded-[30px]">{tags[0]}</span>
                <span className="text-[#23BE0A] bg-gray-100 px-4 py-1 rounded-[30px]">{tags[1]}</span>
            </div>
            <h1 className="text-2xl font-bold playfair">{bookName}</h1>
            <p>By: {author}</p>
            <hr className="border-dashed"/>
            <div className="flex justify-between">
                <span>{category}</span>
                <div className="flex items-center gap-1">
                    <span>{rating}</span>
                    <FaRegStar />
                </div>
            </div>

        </div>
    );
};

export default Book;