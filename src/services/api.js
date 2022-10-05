import axios from "axios"

export const api = axios.create({
    baseURL: 'http://localhost:3333'
})

export const createSession = async(email, password) => {
    return api.post("/sessions", { email, password })
}

export const getCategories = async() => {
    return api.get("/categories")
}

export const getSpecifications = async(token) => {
    return api.get("/specifications", {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}