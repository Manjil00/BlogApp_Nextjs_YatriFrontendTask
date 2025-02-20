'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';

interface Post {
id: string;
title: string;
description: string;
publishedAt: string;
}

export default function BlogList({
allPosts,
postsPerPage
}: {
allPosts: Post[];
postsPerPage: number
}) {
const [currentPage, setCurrentPage] = useState(1);
const [searchQuery, setSearchQuery] = useState('');

const filteredPosts = allPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
);

const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

return (
    <>
    <div className="max-w-2xl mx-auto mb-12 bg-white rounded-lg p-4 flex gap-2">
        <input
        className="w-full p-2 rounded-md focus:ring-blue-500"
        placeholder="Search for Blogs by Title"
        value={searchQuery}
        onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1);
        }}
        />
        <button className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        <FaSearch className="h-6 w-6" />
        </button>
    </div>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {currentPosts.map((post) => (
        <article
            key={post.id}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="p-6">
            <h2 className="text-xl font-bold mb-3">{post.title}</h2>
            <p className="text-slate-600 mb-4 line-clamp-3">
                {post.description || 'No description'}
            </p>
            <div className="flex justify-between items-center text-sm text-slate-500">
                <span>
                {new Date(post.publishedAt).toLocaleDateString()}
                </span>
                <Link
                href={`/blog/${encodeURIComponent(post.id)}`}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                Read More
                </Link>
            </div>
            </div>
        </article>
        ))}
    </div>

    <div className="flex justify-center gap-4 mt-8">
        <button
        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
        Prev
        </button>
        <span className="px-4 py-2 text-white">
        Page {currentPage} of {totalPages}
        </span>
        <button
        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
        Next
        </button>
    </div>
    </>
);
}