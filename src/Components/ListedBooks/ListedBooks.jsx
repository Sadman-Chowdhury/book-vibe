import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getReadBooks } from "../../Utilities/localStorage";

const ListedBooks = () => {
    const books = useLoaderData()

    const [readBooks, setReadBooks] = useState([])
    
    useEffect(()=>{
        const storedReadIds = getReadBooks()
        if(books.length>0){
            const readBook = books.filter(book=>storedReadIds.includes(book.bookId))
            setReadBooks(readBook)
        }
    },[books])
    return (
        <div>
            <h2>Listed books {readBooks.length}</h2>
        </div>
    );
};

export default ListedBooks;