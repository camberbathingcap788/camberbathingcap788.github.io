export default function PillarsSection() {
  const pillars = [
    { title: "Education", description: "Accessible blockchain and financial literacy programs." },
    { title: "Agent Network", description: "Community agents supporting digital adoption." },
    { title: "Reforestation", description: "Environmental sustainability and tree‑planting initiatives." }
  ];

  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold text-center mb-10">Our Core Pillars</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="p-6 border rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold mb-3">{pillar.title}</h3>
            <p className="text-gray-700">{pillar.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
