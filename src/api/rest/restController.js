import http from '../interceptor';

export const registerRequest = (data) => http.post('api/register/', data);
export const loginRequest = (data) => http.post('api/login/', data);
export const getProducts = () => http.get('api/products/');
export const getProductById = (id) => http.get(`api/reviews/${id}`);
export const createReview = ({text, rate, productId}) => http.post(`/api/reviews/${productId}`, {rate, text});