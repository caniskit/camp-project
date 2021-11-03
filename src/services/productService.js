import axios from "axios"

export default class ProductService{
    getProducts(){
        return axios.get("http://localhost:8080/api/products/getall")
    }
    
    getByProductName(productName){
        return axios.get("http://localhost:8080/api/products/getByProductName?productName="+ productName);
    }

    async getByProductId(productId){
        return await axios.get("http://localhost:8080/api/products/getByProductID?productId="+productId);
    }

    
}