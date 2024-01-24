import {useState, useEffect} from 'react'
import {Link, Navigate, useParams} from 'react-router-dom'
import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Product = (props) => {
    const [product, setProduct] = useState()
    const params = useParams();
    // console.log(params);

    useEffect(() => {
        info();
    },[])

    const info = async () => {
        try {
            const res = await axios.get(`${BASE_URL}`+params.id)
            setProduct(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    const backToShop = () => {
        Navigate('/')
    }

    return (
        <>
        <h1>Product</h1>
        {
            product?product.map(item => {
                return(
                    <div>
                        <h1>{item.product_name}</h1>
                        <h1>{item.price}</h1>
                        <h1>{item.description}</h1>
                    </div>
                )
            }):null
        }
        </>
    );
}

export default Product;