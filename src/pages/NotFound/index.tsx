import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export function NotFound() {

    const navigate = useNavigate()


    useEffect(() => {

        setTimeout(() => {
        navigate("/")
        }, 3000)
    }, [])
    return (<h1>Page not found, you will be redirected...</h1>)
}