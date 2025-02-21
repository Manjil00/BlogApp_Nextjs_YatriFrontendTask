import Link from "next/link";
import { notFound } from "next/navigation";

const API_KEY = process.env.NEWS_API_KEY;

interface PageProps {
  params: { id: string };
}

async function getPost(id: string): Promise<Post | null> {
try {
    const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`,
    { next: { revalidate: 5000 } }
    );

    if (!res.ok) throw new Error("Failed to fetch posts");

    const data = await res.json();
    const posts = data.articles.map((article: any, index: number) => ({
    id: `${article.title}-${index}`,
    title: article.title || "Untitled Post",
    content: article.content || article.description || "No content available",
    publishedAt: article.publishedAt || new Date().toISOString(),
    }));

    return (
    posts.find((post) => post.id === decodeURIComponent(id)) || null
    );
} catch (error) {
    console.error(error);
    return null;
}
}

export default async function BlogPost({ params }: PageProps) {
const post = await getPost(params.id);

if (!post) {
    notFound();
}

return (
    <main className="min-h-screen bg-black text-white p-8">
    <div className="container mx-auto max-w-4xl">
        <Link href="/" className="text-blue-500 hover:text-blue-600 mb-8 inline-block">
        ← Back to Blogs
        </Link>

        <article className="space-y-6">
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <div className="text-gray-400 text-sm">
            Published:{" "}
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            })}
        </div>

        <div className="prose prose-invert max-w-none">
            <p className="whitespace-pre-wrap">{post.content}</p>
        </div>
        </article>
    </div>
    </main>
);
}
