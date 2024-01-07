import React, { useEffect } from "react";
import {connect } from 'react-redux'
import withAuthentication from "../../../session/withAuthentication";
import { fetchProducts } from "../../../redux/products";
import ProductCategoriesCard from "./ProductCategoriesCard";
import Loading from '../../Loading/loading';
import searchSvg from '../../../assets/images/search.svg'
import { Button, Form, InputGroup, Stack, Row, Col, Container } from "react-bootstrap";
const ProductList = ({fetchProducts, loading, products}) => {
    const [search, setSearch] = React.useState('');
    const [searchResults, setSearchResults] = React.useState([]);

    useEffect(() => {
        fetchProducts();
    },[])
    useEffect(()=>{ 
        setSearchResults(products);
    }, [products])
    const handleChangeSearchTerm = (e) => {
        const searchItemName = e.target.value;
        setSearch(searchItemName);
        if(searchItemName.length > 1 ){
            const results = products.filter(category =>
                category.productCategory.productCategoryName.toLowerCase().includes(searchItemName.toLowerCase())
              );            
            setSearchResults(results)
        }
        else{
            setSearchResults(products)
        }
    }
    const handleSearch = () => {
        if(search){
            const results = products.filter(category =>
                category.productCategory.productCategoryName.toLowerCase().includes(search.toLowerCase())
              );            
            setSearchResults(results)
        }
        else{
            setSearchResults(products)
        }
    }
return(
    <>
<Container className="mt-4 mb-3">
    <Row >
    <Col>
          <div className="d-flex flex-column">
          <Stack direction="horizontal" gap={3} className="ms-auto">
      <InputGroup>
        <Form.Control
          placeholder="Search Products"
          aria-label="Search Products"
          aria-describedby="searchProducts"
          onChange={handleChangeSearchTerm}
        />
        <Button variant="secondary" onClick={handleSearch}>
          <img src={searchSvg} alt="search" width="24" height="24" />
        </Button>
      </InputGroup>
    </Stack>
          </div>
    </Col>
    </Row>
   
    </Container>
    {
        loading ? <Loading /> :
    <ProductCategoriesCard categories={searchResults}/>
}
    </>
)
}

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts())
})
const mapStateToProps = state => ({
    loading: state.products.loading,
    products: state.products.products,
})

const ProductListWithAuth =  withAuthentication(ProductList);

export default connect(mapStateToProps, mapDispatchToProps)(ProductListWithAuth);