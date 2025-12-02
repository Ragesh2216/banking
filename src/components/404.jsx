import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <main
            role="main"
            aria-labelledby="notfound-title"
            style={{
                minHeight: "80vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
                textAlign: "center",
                color: "#111827",
                background: "transparent",
            }}
        >
            <h1
                id="notfound-title"
                style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)", margin: 0, lineHeight: 1 }}
            >
                404
            </h1>

            <p style={{ marginTop: "0.5rem", marginBottom: "1rem", fontSize: "1.125rem" }}>
                Page not found
            </p>

            <p style={{ maxWidth: 560, margin: "0.25rem 0 1.5rem", color: "#6b7280" }}>
                The page you are looking for doesn't exist or has been moved. Check the URL or return to the
                homepage.
            </p>

            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                <Link
                    to="/"
                    style={{
                        display: "inline-block",
                        padding: "0.6rem 1rem",
                        backgroundColor: "#111827",
                        color: "#fff",
                        borderRadius: 6,
                        textDecoration: "none",
                        fontWeight: 600,
                    }}
                >
                    Go home
                </Link>

                <a
                    href="mailto:support@example.com"
                    style={{
                        display: "inline-block",
                        padding: "0.6rem 1rem",
                        background: "transparent",
                        color: "#111827",
                        borderRadius: 6,
                        textDecoration: "none",
                        border: "1px solid rgba(17,24,39,0.08)",
                        fontWeight: 600,
                    }}
                >
                    Contact support
                </a>
            </div>
        </main>
    );
}