import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-stone-100 text-center">
      <h1 className="text-4xl font-bold text-stone-800 mb-4">404</h1>
      <h2 className="text-2xl text-stone-600 mb-6">Nic tu nie ma</h2>
      <p className="text-stone-500 mb-8">
        Wygląda na to, że strona, której szukasz, nie istnieje lub została przeniesiona.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-stone-800 text-white text-lg rounded-lg shadow hover:bg-stone-900 transition-all"
      >
        Powrót do menu głównego
      </Link>
    </div>
  );
}
