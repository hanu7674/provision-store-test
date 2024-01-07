import React, { useState } from "react";
import { Form, Button, Card, Stack, Spinner } from "react-bootstrap";
import { login } from "../../redux/auth";
import { connect } from "react-redux";
const LoginForm = ({ loading, login }) => {
    const [validated, setValidated] = useState(false);
    const [passwordValidation, setPasswordValidation] = useState({
        length: false,
        number: false,
        upper: false,
        lower: false,
        special: false
    });
    const handlePasswordChange = (e) => {
        const password = e.target.value;
        const hasNumber = /\d/.test(password);
        const hasUpper = /[A-Z]/.test(password);
        const hasLower = /[a-z]/.test(password);
        const hasSpecial = /[\W_]/.test(password);

        setPasswordValidation({
            length: password.length >= 8,
            number: hasNumber,
            upper: hasUpper,
            lower: hasLower,
            special: hasSpecial
        });
    };
    const allConditionsMet = Object.values(passwordValidation).every((condition) => condition);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            const email = form.elements.formBasicEmail.value;
            const password = form.elements.formBasicPassword.value;
            // Now you can use the hashedPassword in your login API call
            // Call your login API with the email and hashedPassword
            login(email, password);
        }
        setValidated(true);

    };
    return (
        <div className="m-auto">
            <Card >
                <Card.Img variant="top" src="../../assets/images/logo.png" width={120} height={120} />
                <div className="m-5">
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required type="email"
                                autoComplete="email"
                                placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                            <Form.Control.Feedback type="invalid">
                                Please Enter a Valid Email.
                            </Form.Control.Feedback>

                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control required type="password" placeholder="Password"
                                autoComplete="current-password"
                                onChange={handlePasswordChange}
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}"
                            />

                            <Form.Control.Feedback type="invalid">
                                Password is required and must meet the specified criteria.
                            </Form.Control.Feedback>
                            <Form.Text>
                                {
                                    allConditionsMet ? <></> : <>
                                        <div style={{ color: passwordValidation.length ? 'green' : 'inherit' }}>Password must be at least 8 characters long.</div>
                                        <div style={{ color: passwordValidation.number ? 'green' : 'inherit' }}>Password must contain at least one digit.</div>
                                        <div style={{ color: passwordValidation.upper ? 'green' : 'inherit' }}>Password must contain at least one uppercase letter.</div>
                                        <div style={{ color: passwordValidation.lower ? 'green' : 'inherit' }}>Password must contain at least one lowercase letter.</div>
                                        <div style={{ color: passwordValidation.special ? 'green' : 'inherit' }}>Password must contain at least one special character.</div>
                                    </>
                                }</Form.Text>
                        </Form.Group>
                        <Stack>
                            <Button variant="primary" type="submit" className="mt-3 m-auto">
                               {loading ? <><Spinner size="sm" /> Logging in ...</> : "Login"} 
                            </Button>
                        </Stack>
                    </Form>
                </div>
            </Card>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    login: (username, password) => dispatch(login(username, password))
})
const mapStateToProps = state => ({
    loading: state.auth.loading,
})
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);