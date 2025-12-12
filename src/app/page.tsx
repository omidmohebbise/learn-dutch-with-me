import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <main className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 text-blue-600">
          Learn Dutch with Me
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
          Welcome to your Dutch learning journey! 🇳🇱
        </p>
        <div className="mt-8">
          <Link
            href="/common-sentences"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            View 500 Common Sentences
          </Link>
        </div>
      </main>
    </div>
  );
}

