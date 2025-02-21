// app/page.tsx (Server Component)
import BlogList from "@/app/BlogList/page";
import Nav from "@/components/Nav";

const API_KEY = process.env.NEWS_API_KEY;

interface BlogPost {
  id: string;
  title: string;
}
async function getPosts() {
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
      title: article.title || 'Untitled Post',
      description: article.description || 'No description available',
      publishedAt: article.publishedAt || new Date().toISOString(),
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-black">
      <Nav />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-white text-4xl md:text-6xl text-center mb-8">
          Blog App
        </h1>
        <BlogList posts={posts} />
      </main>
    </div>
  );
}