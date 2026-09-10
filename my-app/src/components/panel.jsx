export default function Panel({ title, children }) {
    return (
        <section style={{ border: "2px solid #333", padding: "20px", borderRadius: "10px" }}>
            <h2>{title}</h2>
            <div>{children}</div>
        </section>
    );
}
