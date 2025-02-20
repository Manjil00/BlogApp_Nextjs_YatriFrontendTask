import Nav from "@/components/Nav";
import BlogList from "@/components/BlogList";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

async function fetchPosts() {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`,
      { next: { revalidate: 5000 } }
    );
    
    if (!res.ok) throw new Error('Failed to fetch posts');
    
    const data = await res.json();
    return data.articles.map((article: any, index: number) => ({
      ...article,
      id: `${article.title}-${index}`,
    }));
  } catch (error) {
    console.error(error);
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
        <BlogList allPosts={posts} postsPerPage={6} />
      </main>
    </div>
  );
}