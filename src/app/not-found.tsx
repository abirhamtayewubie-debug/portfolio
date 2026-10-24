import Link from "next/link";

export default function NotFound() {
  return (
    <section className="frame flex min-h-[80svh] flex-col justify-end pb-[var(--space-block)] pt-[var(--header-h)]">
      <p className="t-label">404 · Not on the drawing set</p>
      <h1 className="t-title mt-6 max-w-[14ch]">This sheet is missing.</h1>
      <Link href="/#index" className="t-label link-underline mt-10 w-fit">
        Back to the index →
      </Link>
    </section>
  );
}
