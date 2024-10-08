import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import { useState, useEffect } from 'react';
import ProductHolder from './ProductHolder';
import axios from 'axios';

const options = {
    method: 'GET',
    url: 'https://agoda-com.p.rapidapi.com/hotels/search-overnight',
    params: {id: '1_318'},
    headers: {
      'x-rapidapi-key': 'Sign Up for Key',
      'x-rapidapi-host': 'agoda-com.p.rapidapi.com'
    }
  };
  
  const FakeApiCall = () => {
    const [products, setProducts] = useState([]);

  const getData = async () => {

  try {
      const result = await axios.request(options);
      console.log('getData result', result);
      setProducts(result.data)
  } 
  catch (error) {
      console.error(error);
  }
  };

    useEffect(() => {
        
        getData();
    
    }, []);

    return (
        <div className="container" id="products">
            <div className="row">
                {
                    products.map((items, i) => {
                        return <ProductHolder key={i} productData={items} />;
                    })
                }
            </div>
        </div>
    );
  };
export default AgodaApiCall;
    