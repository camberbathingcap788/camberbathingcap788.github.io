export default function Button({
  children,
  onClick,
  variant = "primary"
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}) {
  const base = "px-6 py-3 rounded-lg font-semibold transition";
  const styles =
    variant === "primary"
      ? "bg-green-600 text-white hover:bg-green-700"
      : "bg-gray-200 text-gray-800 hover:bg-gray-300";

  return (
    <button onClick={onClick} className={`${base} ${styles}`}>
      {children}
    </button>
  );
}
