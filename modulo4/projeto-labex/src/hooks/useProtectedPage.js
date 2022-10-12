import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export const useProtectedPage = () => {
    const navigate = useNavigate();

    useEffect(()=> {
        const token = localStorage.getItem("token");
        if(!token) {
            <Link to="/login" />
        }
    }, [])
}