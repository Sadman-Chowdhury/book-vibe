import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getReadBooks, getWishlistBooks } from "../../Utilities/localStorage";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ListedBooks = () => {
    const books = useLoaderData()

    const [readBooks, setReadBooks] = useState([])
    const [wishlistBooks, setWishlistBooks] = useState([])
    const [readBookDisplay, setReadBookDisplay] = useState([]);
    const [wishlistBookDisplay, setWishlistBookDisplay] = useState([]);
    const [active, setActive] = useState(0)

    const handleBookFilter = (filter, bookType=['readBook']) => {
        let sortedBooks;
        if (filter === 'Rating') {
            sortedBooks = [...bookType].sort((a, b) => b.rating - a.rating);
        } else if (filter === 'Number of pages') {
            sortedBooks = [...bookType].sort((a, b) => b.totalPages - a.totalPages);
        } else if (filter === 'Published year') {
            sortedBooks = [...bookType].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        }
        if (bookType === readBooks) {
            setReadBookDisplay(sortedBooks);
        } else if (bookType === wishlistBooks) {
            setWishlistBookDisplay(sortedBooks);
        }
    };
    
    useEffect(()=>{
        const storedReadIds = getReadBooks()
        const storedWishlistIds = getWishlistBooks()
        if(books.length>0){
            const readBook = books.filter(book=>storedReadIds.includes(book.bookId))
            const wishlistBook = books.filter(book2=>storedWishlistIds.includes(book2.bookId))
            setReadBooks(readBook);
            setWishlistBooks(wishlistBook);
            setReadBookDisplay(readBook);
            setWishlistBookDisplay(wishlistBook);
        }
    },[books])

    return (
        <div className="mt-10">
            <div className="bg-gray-100 rounded-2xl text-center">
                <h1 className="text-3xl font-bold work-sans p-7">Books</h1>
            </div>
            <div className="flex justify-center">
                <details className="dropdown mt-5" style={{ display: active === 0 ? 'block' : 'none' }}>
                    <summary className="m-1 btn bg-[#23BE0A] text-white text-[20px]">Sort By <RiArrowDropDownLine className="text-5xl"/></summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li onClick={()=>handleBookFilter('Rating',readBooks)}><a>Rating</a></li>
                            <li onClick={()=>handleBookFilter('Number of pages', readBooks)}><a>Number of pages</a></li>
                            <li onClick={()=>handleBookFilter('Published year', readBooks)}><a>Published year</a></li>
                        </ul>
                </details>
                <details className="dropdown mt-5" style={{ display: active === 1 ? 'block' : 'none' }}>
                    <summary className="m-1 btn bg-[#23BE0A] text-white text-[20px]">Sort By <RiArrowDropDownLine className="text-5xl"/></summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li onClick={()=>handleBookFilter('Rating',wishlistBooks)}><a>Rating</a></li>
                            <li onClick={()=>handleBookFilter('Number of pages', wishlistBooks)}><a>Number of pages</a></li>
                            <li onClick={()=>handleBookFilter('Published year', wishlistBooks)}><a>Published year</a></li>
                        </ul>
                </details>
            </div>
            
            <Tabs onSelect={(index) => setActive(index)}>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    {
                        readBookDisplay.map(readBook=><div key={readBook.bookId} className="flex flex-col lg:flex-row work-sans gap-5 lg:gap-10 mt-10">
                        <div className="bg-gray-100 rounded-2xl flex justify-center p-8 w-full lg:w-3/12">
                            <img className="h-[170px]" src={readBook.image} alt="" />
                        </div>
                        <div className="w-full lg:w-3/4 space-y-3">
                            <h1 className="text-[24px] font-bold playfair">{readBook.bookName}</h1>
                            <p className="text-[16px] font-medium">By: {readBook.author}</p>
                            <div className="flex flex-col lg:flex-row gap-5">
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
                </TabPanel>

                <TabPanel>
                {
                        wishlistBookDisplay.map(wishlistBook=><div key={wishlistBook.bookId} className="flex flex-col lg:flex-row work-sans gap-10 mt-10">
                        <div className="bg-gray-100 rounded-2xl flex justify-center p-8 w-full lg:w-3/12">
                            <img className="h-[170px]" src={wishlistBook.image} alt="" />
                        </div>
                        <div className="w-full lg:w-3/4 space-y-3">
                            <h1 className="text-[24px] font-bold playfair">{wishlistBook.bookName}</h1>
                            <p className="text-[16px] font-medium">By: {wishlistBook.author}</p>
                            <div className="flex flex-col lg:flex-row gap-5">
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
                            <div className="flex gap-2 lg:gap-6">
                                <span className="px-5 py-2 bg-blue-100 rounded-[30px] text-[#328EFF]">Category: {wishlistBook.category}</span>
                                <span className="px-5 py-2 bg-orange-100 rounded-[30px] text-[#FFAC33]">Rating: {wishlistBook.rating}</span>
                                <Link to={`/bookDetails/${wishlistBook.bookId}`}><button className="px-5 py-2 bg-green-500 rounded-[30px] text-white">View Details</button></Link>
                            </div>
                        </div>
                    </div>)
                    }
                </TabPanel>
                </Tabs>
            </div>
    );
};

export default ListedBooks;