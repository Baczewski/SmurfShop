const orderService = {
    loadAll: async () => {
        const response = await fetch('http://localhost:8080/api/orders', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET',
            credentials: 'include',
        })
        return response.json()
    },
    changeStatus: async (newStatus, id) => {
        const response = await fetch(`http://localhost:8080/api/orders/status/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            credentials: 'include',
            body: JSON.stringify({ status: newStatus })
        })
        return response.json()
    }
}

export default orderService