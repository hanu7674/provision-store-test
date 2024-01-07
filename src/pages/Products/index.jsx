import React from "react";
import Products from "../../components/Products/List";
import { Container, Stack } from "react-bootstrap";

const ProductsPage = () => {
    return (
        <>
            <Stack gap={3}>
                <Products />
            </Stack>
        </>
    )

}
export default ProductsPage;