import Link from 'next/link';

function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-graphite-950 px-6 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-6xl uppercase tracking-[0.05em] text-white">Page Not Found</h1>
      <p className="mt-6 max-w-xl text-lg text-graphite-300">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link className="btn-primary mt-10" href="/">
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;