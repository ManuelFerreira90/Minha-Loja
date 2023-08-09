const fetchProdutos = async (query) => {
    const response = await fetch(`https://fakestoreapi.com/products/${query}`)
    const data = await response.json()

    return data
}

export default fetchProdutos