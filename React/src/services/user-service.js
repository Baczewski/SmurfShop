const userService = {
    register: async (data) => {
        const response = await fetch('http://localhost:8080/api/user/register', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })

        if (response.status == 422) {
            const parsedResponse = await response.json()

            if (parsedResponse.msg.includes('email')) {
                throw new Error('Email is already taken!')
            } else {
                throw new Error('Username is already taken!')
            }
        }

        return response.json()
    },
    login: async (data) => {
        const response = await fetch('http://localhost:8080/api/user/login', {
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            method: 'POST',
            body: JSON.stringify(data)
        })

        if (response.status === 401) {
            throw new Error('Unauthorized!')
        }

        return response.json()
    },
    logout: async () => {
        const response = await fetch('http://localhost:8080/api/user/logout', {
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            method: 'POST'
        })

        return response.json()
    },
    auth: async () => {
        const response = await fetch('http://localhost:8080/api/user/auth', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET',
            credentials: 'include'
        })

        if (response.status === 401) {
            throw new Error('Unauthorized!')
        }

        return response.json()
    }
}

export default userService