import NewsList from "@/components/sections/NewsList";

export default function NewsPage() {
  return (
    <section className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-6">News</h1>
      <NewsList />
    </section>
  );
}
