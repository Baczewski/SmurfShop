const smurfService = {
    loadAll: async (type) => {
        const response = await fetch(`http://localhost:8080/api/smurf/${type}`)

        return response.json()
    },
    loadOne: async (id) => {
        const response = await fetch(`http://localhost:8080/api/smurf/smurf/${id}`)
        return response.json()
    },
    create: async (data) => {
        const response = await fetch('http://localhost:8080/api/smurf', {
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            method: 'POST',
            body: JSON.stringify(data)
        })
        return response.json()
    },
    delete: async (id) => {
        const response = await fetch(`http://localhost:8080/api/smurf/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            method: 'DELETE'
        })
        return response.json()
    },
    edit: async(id, data) => {
        const response = await fetch(`http://localhost:8080/api/smurf/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            method: 'PUT',
            body: JSON.stringify(data)
        })
        return response.json()
    }
}

export default smurfService