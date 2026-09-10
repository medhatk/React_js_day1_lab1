export default function ProductCard({ id, name ,image , price, category, inStock, onDelete }) {
    return (
        <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
            <h3>{name}</h3>
            <img style={{width: "250px", borderRadius:"8px"}}
             src={image}
             alt={name}
            />
            <p>Category: {category}</p>
            <p>Price: ${price}</p>

            {!inStock && <span style={{ color: "red", fontWeight: "bold" }}>out of stock</span>}

            <br />

            <button onClick={() => onDelete(id)} style={{ marginTop: "8px", color: "white" }}>
                delete
            </button>
        </div>
    );
}

