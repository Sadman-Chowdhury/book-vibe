import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getReadBooks, getWishlistBooks } from "../../Utilities/localStorage";

const ListedBooks = () => {
    const books = useLoaderData()

    const [readBooks, setReadBooks] = useState([])
    const [wishlistBooks, setWishlistBooks] = useState([])
    
    useEffect(()=>{
        const storedReadIds = getReadBooks()
        const storedWishlistIds = getWishlistBooks()
        if(books.length>0){
            const readBook = books.filter(book=>storedReadIds.includes(book.bookId))
            const wishlistBook = books.filter(book=>storedWishlistIds.includes(book.bookId))
            setReadBooks(readBook)
            setWishlistBooks(wishlistBook)
        }
    },[books])

    return (
        <div>
            <h2>Listed books {readBooks.length}</h2>
            <h2>Wish{wishlistBooks.length}</h2>
        </div>
    );
};

export default ListedBooks;