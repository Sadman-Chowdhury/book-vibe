import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getReadBooks, getWishlistBooks } from "../../Utilities/localStorage";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { Link } from "react-router-dom";

const ListedBooks = () => {
    const books = useLoaderData()

    const [readBooks, setReadBooks] = useState([])
    const [wishlistBooks, setWishlistBooks] = useState([])
    
    useEffect(()=>{
        const storedReadIds = getReadBooks()
        const storedWishlistIds = getWishlistBooks()
        if(books.length>0){
            const readBook = books.filter(book=>storedReadIds.includes(book.bookId))
            const wishlistBook = books.filter(book2=>storedWishlistIds.includes(book2.bookId))
            setReadBooks(readBook)
            setWishlistBooks(wishlistBook)
        }
    },[books])

    return (
        <div className="mt-10">
            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab text-xl work-sans" aria-label="Read Books" checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {
                        readBooks.map(readBook=><div key={readBook.bookId} className="flex flex-row work-sans gap-10 mt-10">
                        <div className="bg-gray-100 rounded-2xl flex justify-center p-8 w-3/12">
                            <img className="h-[170px]" src={readBook.image} alt="" />
                        </div>
                        <div className="w-3/4 space-y-3">
                            <h1 className="text-[24px] font-bold playfair">{readBook.bookName}</h1>
                            <p className="text-[16px] font-medium">By: {readBook.author}</p>
                            <div className="flex gap-5">
                                <div className="space-x-5">
                                    <span className="font-bold text-black">Tag</span>
                                    <span className="text-[#23BE0A] bg-gray-100 px-4 py-1 rounded-[30px]">#{readBook.tags[0]}</span>
                                    <span className="text-[#23BE0A] bg-gray-100 px-4 py-1 rounded-[30px]">#{readBook.tags[1]}</span>
                                </div>
                                <div className="flex text-[#131313B3]">
                                    <MdOutlineLocationOn className="text-2xl"/>
                                    <p>Year of Publishing:  </p>
                                    <p className="pl-2">{readBook.yearOfPublishing}</p>
                                </div>
                            </div>
                            <div className="flex gap-10 text-[#131313B3]">
                                <div className="flex gap-3">
                                    <IoMdContacts className="text-2xl"/>
                                    <p>Publisher: </p>
                                    <p>{readBook.publisher}</p>
                                </div>
                                <div className="flex gap-1">
                                    <HiOutlineDocumentChartBar className="text-2xl"/>
                                    <p>Page: </p>
                                    <p>{readBook.totalPages}</p>
                                </div>
                            </div>
                            <hr className="border-dashed"/>
                            <div className="flex gap-6">
                                <span className="px-5 py-2 bg-blue-100 rounded-[30px] text-[#328EFF]">Category: {readBook.category}</span>
                                <span className="px-5 py-2 bg-orange-100 rounded-[30px] text-[#FFAC33]">Rating: {readBook.rating}</span>
                                <Link to={`/bookDetails/${readBook.bookId}`}><button className="px-5 py-2 bg-green-500 rounded-[30px] text-white">View Details</button></Link>
                            </div>
                        </div>
                    </div>)
                    }
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab text-xl work-sans" aria-label="Wishlist Books" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                {
                        wishlistBooks.map(wishlistBook=><div key={wishlistBook.bookId} className="flex flex-row work-sans gap-10 mt-10">
                        <div className="bg-gray-100 rounded-2xl flex justify-center p-8 w-3/12">
                            <img className="h-[170px]" src={wishlistBook.image} alt="" />
                        </div>
                        <div className="w-3/4 space-y-3">
                            <h1 className="text-[24px] font-bold playfair">{wishlistBook.bookName}</h1>
                            <p className="text-[16px] font-medium">By: {wishlistBook.author}</p>
                            <div className="flex gap-5">
                                <div className="space-x-5">
                                    <span className="font-bold text-black">Tag</span>
                                    <span className="text-[#23BE0A] bg-gray-100 px-4 py-1 rounded-[30px]">#{wishlistBook.tags[0]}</span>
                                    <span className="text-[#23BE0A] bg-gray-100 px-4 py-1 rounded-[30px]">#{wishlistBook.tags[1]}</span>
                                </div>
                                <div className="flex text-[#131313B3]">
                                    <MdOutlineLocationOn className="text-2xl"/>
                                    <p>Year of Publishing:  </p>
                                    <p className="pl-2">{wishlistBook.yearOfPublishing}</p>
                                </div>
                            </div>
                            <div className="flex gap-10 text-[#131313B3]">
                                <div className="flex gap-3">
                                    <IoMdContacts className="text-2xl"/>
                                    <p>Publisher: </p>
                                    <p>{wishlistBook.publisher}</p>
                                </div>
                                <div className="flex gap-1">
                                    <HiOutlineDocumentChartBar className="text-2xl"/>
                                    <p>Page: </p>
                                    <p>{wishlistBook.totalPages}</p>
                                </div>
                            </div>
                            <hr className="border-dashed"/>
                            <div className="flex gap-6">
                                <span className="px-5 py-2 bg-blue-100 rounded-[30px] text-[#328EFF]">Category: {wishlistBook.category}</span>
                                <span className="px-5 py-2 bg-orange-100 rounded-[30px] text-[#FFAC33]">Rating: {wishlistBook.rating}</span>
                                <Link to={`/bookDetails/${wishlistBook.bookId}`}><button className="px-5 py-2 bg-green-500 rounded-[30px] text-white">View Details</button></Link>
                            </div>
                        </div>
                    </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;