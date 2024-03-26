import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getReadBooks } from "../../Utilities/localStorage";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const PagesToRead = () => {
    const books = useLoaderData()

    const [readBooks, setReadBooks] = useState([])

    useEffect(()=>{
        const storedReadIds = getReadBooks()
        if(books.length>0){
            const readBook = books.filter(book=>storedReadIds.includes(book.bookId))
            setReadBooks(readBook);
        }
    },[books])

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };


    return (
        <div>
            <div className="flex justify-center mt-10 bg-gray-100 p-5 max-w-full lg:max-w-6xl">
                <BarChart
                    width={1170}
                    height={300}
                    data={readBooks}
                    margin={{
                        top: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="bookName" />
                    <YAxis />
                    <Tooltip></Tooltip>
                    <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {readBooks.map((entry, index) => (
                            <Cell key={`bar-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Bar>
                </BarChart>
            </div>
        </div>
    );
};

export default PagesToRead;