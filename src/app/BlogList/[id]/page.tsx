import { notFound } from "next/navigation";

type Post = {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
};

const API_KEY = process.env.NEWS_API_KEY;

async function getPost(id: string): Promise<Post | null> {
  try {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
    if (!res.ok) return null;
    const data = await res.json();
    return data.articles.length > 0
      ? {
          id,
          title: data.articles[0].title || "Untitled",
          description: data.articles[0].description || "No description",
          publishedAt: data.articles[0].publishedAt || new Date().toISOString(),
        }
      : null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);
  if (!post) return notFound();

  return (
    <div className="text-white p-6">
      <h1 className="text-3xl">{post.title}</h1>
      <p>{post.description}</p>
      <span className="text-gray-500">{new Date(post.publishedAt).toLocaleDateString()}</span>
    </div>
  );
}

export async function generateStaticParams() {
  return [];
}
