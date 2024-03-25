import { useEffect, useState } from "react";
import '../Font/font.css'
import Book from "../Book/Book";

const Books = () => {

    const [books, setBooks] = useState([])

    useEffect(()=>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    return (
        <div className='mt-10'>
                <h1 className='text-[40px] font-bold playfair text-center'>Books</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-2 mb-5">
                    {
                        books.map(book=><Book key={book.id} book={book}></Book>)
                    }
                </div>
        </div>
    );
};

export default Books;