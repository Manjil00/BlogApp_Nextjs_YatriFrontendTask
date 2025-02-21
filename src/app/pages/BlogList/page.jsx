'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const POSTS_PER_PAGE = 6;

export default function BlogList({ posts }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  if (isLoading) {
    return (
      <div className="space-y-8">
        <div className="max-w-2xl mx-auto mb-12">
          <Skeleton height={56} className="rounded-lg" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="p-6">
                <Skeleton count={1} height={28} className="mb-3" />
                <Skeleton count={3} className="mb-4" />
                <div className="flex justify-between items-center">
                  <Skeleton width={100} />
                  <Skeleton width={100} height={36} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

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
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="p-6">
              <h2 className="text-xl font-bold mb-3">{post.title}</h2>
              <p className="text-slate-600 mb-4 line-clamp-3">
                {post.description}
              </p>
              <div className="flex justify-between items-center text-sm text-slate-500">
                <span>
                  {new Date(post.publishedAt).toLocaleDateString()}
                </span>
                <Link
                  href={`/BlogList/${encodeURIComponent(post.id)}`}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                  Read More
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-10">
        <button
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="bg-blue-500 text-white rounded-lg p-2 w-[70px] disabled:opacity-50 hover:bg-blue-600"
        >
          Prev
        </button>
        <span className="text-white text-xl flex items-center">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className="bg-blue-500 text-white rounded-lg p-2 w-[70px] disabled:opacity-50 hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </>
  );
}