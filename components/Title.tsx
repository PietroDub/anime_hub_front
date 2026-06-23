export default function Title({ title }: { title: string }) {
  return (
    <h1 className="text-3xl font-bold not-dark:text-gray-900 dark:text-gray-100">
      {title}
    </h1>
  );
}