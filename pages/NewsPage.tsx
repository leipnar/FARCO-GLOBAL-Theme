import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { NEWS_ARTICLES } from '../constants';
import type { NewsArticle } from '../types';

const POSTS_PER_PAGE = 11;

const NewsCard: React.FC<{ article: NewsArticle; isFeatured?: boolean }> = ({ article, isFeatured = false }) => (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden group flex flex-col transform hover:-translate-y-2 transition-transform duration-300 ${isFeatured ? 'col-span-1 md:col-span-2 lg:col-span-3' : ''}`}>
        <div className={`relative overflow-hidden ${isFeatured ? 'h-80' : 'h-52'}`}>
            <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <span className="absolute top-4 left-4 bg-farco-sky-blue text-white text-xs font-bold py-1 px-3 rounded-full">{article.category}</span>
        </div>
        <div className={`p-6 flex flex-col flex-grow`}>
            <p className="text-sm text-gray-500 mb-2">{article.date}</p>
            <h3 className={`font-bold text-farco-blue group-hover:text-farco-sky-blue transition-colors mb-2 leading-tight ${isFeatured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>{article.title}</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">{article.excerpt}</p>
            <div className="flex flex-wrap gap-2 mt-auto mb-4">
                {article.tags.map(tag => (
                    <span key={tag} className="text-xs bg-farco-gray text-gray-600 font-medium py-1 px-2.5 rounded-full">#{tag}</span>
                ))}
            </div>
            <Link to="#" className="font-semibold text-farco-sky-blue hover:underline self-start mt-2">Read More →</Link>
        </div>
    </div>
);

const NewsPage: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('All');
    
    const categories = ['All', ...Array.from(new Set(NEWS_ARTICLES.map(a => a.category)))];

    const filteredArticles = useMemo(() => {
        if (selectedCategory === 'All') {
            return NEWS_ARTICLES;
        }
        return NEWS_ARTICLES.filter(article => article.category === selectedCategory);
    }, [selectedCategory]);

    const totalPages = Math.ceil(filteredArticles.length / POSTS_PER_PAGE);
    const paginatedArticles = filteredArticles.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    return (
        <div className="bg-farco-gray min-h-screen">
            <header className="bg-farco-blue text-white py-20 relative">
                <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(https://picsum.photos/seed/global-news-background/1920/1080)` }} />
                <div className="container mx-auto px-6 text-center relative">
                    <h1 className="text-5xl font-extrabold tracking-tight">News & Insights</h1>
                    <p className="text-xl mt-2 text-gray-300">The latest from Farco Global and the shipping industry.</p>
                </div>
            </header>

            <div className="container mx-auto px-6 py-16">
                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => handleCategoryChange(category)}
                            className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
                                selectedCategory === category 
                                ? 'bg-farco-blue text-white shadow-md' 
                                : 'bg-white text-gray-700 hover:bg-farco-light-blue'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Articles Grid */}
                {paginatedArticles.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {paginatedArticles.map((article, index) => (
                             <NewsCard 
                                key={article.id} 
                                article={article} 
                                isFeatured={currentPage === 1 && index === 0}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 px-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-farco-blue">No Articles Found</h3>
                        <p className="text-gray-600 mt-2">There are no news articles in this category yet.</p>
                    </div>
                )}
                
                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-16">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`h-10 w-10 text-sm font-bold rounded-full transition-colors duration-300 ${
                                    currentPage === page
                                    ? 'bg-farco-blue text-white shadow-md'
                                    : 'bg-white text-gray-700 hover:bg-farco-light-blue'
                                }`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default NewsPage;
