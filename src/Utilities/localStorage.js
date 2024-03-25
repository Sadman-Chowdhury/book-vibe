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


export {getReadBooks, saveReadBooks}