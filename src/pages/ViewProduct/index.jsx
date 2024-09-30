import PropTypes from "prop-types"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function ViewProductPage({ products }) {
    /*
        Related to :id. Looks for value that is passed in. 
    */
    const { id } = useParams();

    const [product, setProduct] = useState({
        id: 0,
        name: "",
        type: "",
        price: 0,
        inventory: {quantity: 0, incomingDelivery: false}
    })
    
    useEffect(() => {
        if (products && id) {
            const matchingProduct = products.find((product) => Number(product.id) == Number(id));
            setProduct(matchingProduct);
        }
    }, [products, id])

    if (!product) return <div>Product not found</div>

    return (
        <main>
            <h2> Product Page </h2>
            <h3> {product.name} </h3>
            <p> {product.type} </p>
            <p> ${product.price} </p>
            <p> Stock Level: {product.inventory.quantity} </p>
            <p> Delivery expected: {product.inventory.incomingDelivery? "Yes" : "No"} </p>
        </main>
    )
}

export default ViewProductPage

ViewProductPage.propTypes = {
    products: PropTypes.array
}