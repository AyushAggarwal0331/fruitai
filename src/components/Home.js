import React from 'react';
import { Link } from 'react-router-dom';
import { FaLanguage } from 'react-icons/fa';

const Home = () => {
    return (
        <div
            className="flex flex-col items-center justify-center h-screen"
            style={{
                background: 'linear-gradient(135deg, #d4a5ff, #a5d4ff)',
                fontFamily: 'Arial, sans-serif',
            }}
        >
            <div className="text-center mb-8 px-4">
                <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                    Fruit.AI
                </h1>
                <p className="text-lg md:text-xl text-white mt-2 italic tracking-wide">
                    "Be Healthy!"
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 px-4">
                <Link
                    to="/chat"
                    className="flex items-center justify-center bg-yellow-200 text-purple-600 py-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    style={{ width: '150px', height: '150px', fontSize: '18px', padding: '12px' }}
                >
                    <span className="font-extrabold text-2xl px-2 py-2 text-yellow-600 bg-gradient-to-r from-yellow-500 to-yellow-700 text-transparent bg-clip-text rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl hover:text-yellow-800 hover:bg-opacity-10">
                        Chat.
                    </span>
                </Link>
                <Link
                    to="/translator"
                    className="flex items-center justify-center bg-green-200 text-blue-600 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-300"
                    style={{ width: '150px', height: '150px', fontSize: '18px', padding: '12px' }}
                >
                    <FaLanguage
                        size={40}
                        className="font-extrabold text-2xl px-2 py-2 text-yellow-600 bg-gradient-to-r from-yellow-500 to-yellow-700 text-transparent bg-clip-text rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl hover:text-blue-800 hover:bg-opacity-10"
                    />
                </Link>
                <Link
                    to="/faq"
                    className="flex items-center justify-center bg-yellow-100 text-blue-800 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    style={{ width: '150px', height: '150px', fontSize: '18px', padding: '12px' }}
                >
                    <span className="font-bold text-2xl px-2 py-2 text-blue-600 bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl hover:text-red-800 hover:bg-opacity-10">
                        FAQ
                    </span>
                </Link>
                <Link
                    to="/about"
                    className="flex items-center justify-center bg-pink-200 text-purple-600 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-pink-300"
                    style={{ width: '150px', height: '150px', fontSize: '18px', padding: '12px' }}
                >
                    <span className="font-bold text-2xl px-2 py-2 text-red-600 bg-gradient-to-r from-red-500 to-yellow-700 text-transparent bg-clip-text rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl hover:text-red-800 hover:bg-opacity-10">
                        About
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default Home;
