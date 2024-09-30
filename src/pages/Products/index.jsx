import PropTypes from "prop-types"
import { Link } from "react-router-dom";

function ProductsPage({ products }) {
    return (
        <main>
            <h2>Products</h2>
            <ul>
                {products.map((product, index) => {
                    return (
                    <li key={index}>
                        <h3> {product.name} </h3>
                        <h4> {product.type} </h4>
                        <Link to={`/products/${product.id}`}> View Product </Link>
                    </li>
                    );
                })}
            </ul>
        </main>
    )
}

export default ProductsPage

ProductsPage.propTypes = {
    products: PropTypes.array
}