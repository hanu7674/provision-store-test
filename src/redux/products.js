import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from '../reducers/types';

export const fetchProductsRequest = () => ({
    type: FETCH_PRODUCTS_REQUEST,
  });
  
  export const fetchProductsSuccess = (products) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
  });
  
  export const fetchProductsFailure = (error) => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: error,
  });

  
export const fetchProducts = () => {
    return async (dispatch) => {
      dispatch(fetchProductsRequest());
        const accessToken = localStorage.getItem('authToeken');
      try {
        const response = await fetch('https://api.kalpav.com/api/v1/product/category/retail', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
  
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
  
        const data = await response.json();
        dispatch(fetchProductsSuccess(data.response));
      } catch (error) {
        dispatch(fetchProductsFailure(error.message));
      }
    };
  };