import Link from "next/link";

export default function NotFound() {
  return (
    <section
      className="container"
      style={{
        paddingTop: "calc(var(--nav-h) + 8vw)",
        paddingBottom: "10vw",
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <span className="eyebrow">404</span>
      <h1 className="display" style={{ marginTop: "0.75rem" }}>
        PAGE
        <br />
        NOT FOUND
      </h1>
      <p className="lead" style={{ marginTop: "1.5rem" }}>
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link href="/" className="link-underline body-sm" style={{ marginTop: "2rem" }}>
        Back to home <span aria-hidden="true">→</span>
      </Link>
    </section>
  );
}
