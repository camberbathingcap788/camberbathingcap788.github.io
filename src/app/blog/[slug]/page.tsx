import { getPostBySlug } from "@/lib/blog";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  return (
    <section className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
      <article className="prose">{post.content}</article>
    </section>
  );
}
