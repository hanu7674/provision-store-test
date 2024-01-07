import React, { useEffect } from "react";
import LoginForm from "../../components/Login-Form";
import { Container, Stack } from "react-bootstrap";
import { useAuth } from "../../session/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const isAuthenticated = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (isAuthenticated.isAuthenticated) {
            navigate('/products')
        }
    }, [isAuthenticated.isAuthenticated])
    return (
        <>
            <Container className="mt-3">
                <Stack gap={3}>
                    <LoginForm />
                </Stack>
            </Container>
        </>
    )

}
export default LoginPage;