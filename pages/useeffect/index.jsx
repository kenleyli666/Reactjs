import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import { useState, useEffect } from 'react';
import ProductHolder from './ProductHolder';
import axios from 'axios';


const FakeApiCall = () => {
    const [products, setProducts] = useState([]);

    const getData = async () => {
        try{
            const result = (await axios.get('https://fakestoreapi.com/products'));
            console.log('getData result', result)
            setProducts(result.data)
        }
        catch(e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getData();
        // fetch('https://fakestoreapi.com/products')
        // .then(function (res) {
        //     return res.json();
        // })
        // .then(function (data) {
        //     console.log('data', data);
        //     setProducts(data);
        // });
    }, []);

    return (
        <div className="container" id="products">
            <div className="row">
                {
                    products.map((product, i) => {
                        return <ProductHolder key={i} productData={product} />;
                    })
                }
            </div>
        </div>
    );
}

export default FakeApiCall;
    