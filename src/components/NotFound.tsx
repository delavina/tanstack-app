import { Link } from '@tanstack/react-router'

export function NotFound({ children }: { children?: React.ReactNode }) {
  return (
    <main className="page-wrap p-8 text-center space-y-4">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-lg text-(--sea-ink-soft)">
        {children || "The page you are looking for doesn't exist."}
      </p>
      <div>
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-xl px-4 py-2 font-semibold text-white bg-(--sea-ink) hover:opacity-90 transition"
        >
          Go Back Home
        </Link>
      </div>
    </main>
  )
}