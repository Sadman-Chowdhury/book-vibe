const getReadBooks = () => {
    const storedReadBooks = localStorage.getItem('Read-books')
    if(storedReadBooks){
        return JSON.parse(storedReadBooks)
    }
    return []
}

const saveReadBooks = id => {
    const storedReadBooks = getReadBooks()
    const exists = storedReadBooks.find(bookId=>bookId === id)
    if(!exists){
        storedReadBooks.push(id)
        localStorage.setItem('Read-books', JSON.stringify(storedReadBooks))
    }
}

const getWishlistBooks = () => {
    const storedWishlistBooks = localStorage.getItem('Wishlist-books')
    if(storedWishlistBooks){
        return JSON.parse(storedWishlistBooks)
    }
    return []
}

const saveWishlistBooks = id => {
    const storedWishlistBooks = getWishlistBooks()
    const exists = storedWishlistBooks.find(bookId=>bookId === id)
    if(!exists){
        storedWishlistBooks.push(id)
        localStorage.setItem('Wishlist-books', JSON.stringify(storedWishlistBooks))
    }
}


export {getReadBooks, saveReadBooks, getWishlistBooks ,saveWishlistBooks}