const cartService = {
    loadAll: async () => {
        const response = await fetch('http://localhost:8080/api/cart-items', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET',
            credentials: 'include'
        })
        return response.json()
    },
    addToCart: async (data) => {
        const response = await fetch('http://localhost:8080/api/cart-items', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(data)
        })
        return response.json()
    },
    deleteFromCart: async (id) => {
        const response = await fetch(`http://localhost:8080/api/cart-items/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE',
            credentials: 'include'
        })
        return response.json()
    },
    checkout: async (items) => {
        const response = await fetch('http://localhost:8080/api/cart-items/checkout', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(items)
        })
        return response.json()
    }
}

export default cartService