export default function Input({
  label,
  ...props
}: {
  label: string;
  [key: string]: any;
}) {
  return (
    <div className="mb-4">
      <label className="block mb-2 font-medium">{label}</label>
      <input
        {...props}
        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
      />
    </div>
  );
}
