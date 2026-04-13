function Item({ name, price }) {
    return(
        <div>
            <h2>{name}</h2>
            <p>${price}.00</p>
        </div>
    )
}

export default Item