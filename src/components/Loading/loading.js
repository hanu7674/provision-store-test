import React from "react";
import { Spinner } from "react-bootstrap";
const Loading = () => (
    <div style={{height: "100vh", textAlign: "center"}}>
    <Spinner animation="border" role="status">
</Spinner>
    </div>
)
export default Loading;