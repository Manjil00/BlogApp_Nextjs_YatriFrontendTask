import Nav from "@/components/Nav";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

const API_KEY = process.env.NEWS_API_KEY;

async function fetchPosts() {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`,
      { next: { revalidate: 5000 } }
    );
    
    if (!res.ok) throw new Error('Failed to fetch posts');
    
    const data = await res.json();
    return data.articles.map((article, index) => ({
      ...article,
      id: article.title + '-' + index,
    }));
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export default async function Home() {
  const posts = await fetchPosts();

  return (
    <div className="min-h-screen bg-black">
      <Nav />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-white text-4xl md:text-6xl text-center mb-8">
          Blog App
        </h1>
        
        <div className="max-w-2xl mx-auto mb-12 bg-white rounded-lg p-4 flex gap-2">
          <input
            className="w-full p-2 rounded-md  focus:ring-blue-500"
            placeholder="Search for Blogs by Title"
          />
          <button className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            <FaSearch className="h-6 w-6" />
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 6).map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
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

      </main>
    </div>
  );
}