import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Course() {
    const [book, setBook] = useState([]);

    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:4001/books");
                console.log(res.data);
                setBook(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getBook();
    }, []);

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
                {/* Header Section */}
                <div className="pt-32 items-center justify-center text-center">
                    <h1 className="text-3xl font-bold pb-6">
                        📚 Unlock the Power of <span className="text-pink-500">Books</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                        "A room without books is like a body without a soul." – Cicero  
                        <br />
                        Discover a vast collection of books that inspire, educate, and entertain. Whether you're a student, 
                        an avid reader, or just starting your reading journey, we have the perfect book for you. From fiction to 
                        self-development, explore the endless possibilities within pages.
                    </p>
                    <Link to="/">
                        <button className="btn btn-secondary mt-6 hover:bg-pink-700 duration-300 cursor-pointer">
                            Back to Home
                        </button>
                    </Link>
                </div>

                {/* Book Display Section */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {book.map((item) => (
                        <Cards item={item} key={item.id} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Course;
