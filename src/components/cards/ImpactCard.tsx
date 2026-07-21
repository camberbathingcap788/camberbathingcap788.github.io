export default function ImpactCard({
  title,
  value
}: {
  title: string;
  value: string | number;
}) {
  return (
    <div className="p-6 border rounded-xl shadow-sm text-center">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-3xl font-bold text-green-600">{value}</p>
    </div>
  );
}
