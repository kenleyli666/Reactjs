import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import { useState, useEffect } from 'react';
import ProductHolder from './ProductHolder';
import axios from 'axios';
import Sizefilter from './SizeFilter';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import IconButton from './IconButton';
// import BrandFilter from './BrandFilter';
import ColorFilter from './ColorFilter';
import  RadioFilter from './RadioFilter';
// import { red } from '@mui/material/colors';
import CategoriesFilter from './CategoriesFilter';
import { Box } from '@mui/material';


function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

const FakeApiCall = () => {
    const [products, setProducts] = useState([]);
    const [productData, setProductData] = useState([]);

    const [productCategory, setProductCategory] = useState([]);

    // const getData = async () => {
    //     try{
    //         const result = (await axios.get('https://fakestoreapi.com/products'));
    //         console.log('getData result', result)
    //         setProducts(result.data)
    //     }
    //     catch(e) {
    //         console.log(e);
    //     }
    // }

    useEffect(() => {
      // method: 'POST' 
      fetch('https://fakestoreapi.com/products', { }) 
        
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            const result = [];
            console.log('data', data)
            
            setProductData(data);

            const category = removeDuplicates(data.map(item => item.category));

            setProductCategory(
                category.map((item, i) => {
                    return {
                        name: item,
                        link: `/category/${i + 1}`
                    };
                })
            );

            for (let i = 0; i < data.length; i += 3) {
                let dataBlock0 = data[i];
                let dataBlock1 = data[i + 1]
                let dataBlock2 = data[i + 2]
                console.log('dataBlock0', dataBlock0)

                result.push(
                    <div className="row">
                        {
                            dataBlock0 && <ProductHolder productData={dataBlock0} />
                        }
                        {
                            dataBlock1 && <ProductHolder productData={dataBlock1} />
                        }
                        {
                            dataBlock2 && <ProductHolder productData={dataBlock2} />
                        }
                    </div>
                );
            }
            setProducts(result)

        });

    }, []);

    return (
        <>
        
        <div className="container" id="products">
        <div>
        {/* 1 */}
        <Accordion className="radiofilter">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
        <p>RadioFilter</p>
        </AccordionSummary>
        <AccordionDetails >

        <RadioFilter />

        </AccordionDetails>
      </Accordion>

      {/* 2 */}
      <Accordion className="brandfilter">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >

        <p>CategoryiesFilter</p>
        </AccordionSummary>
        <AccordionDetails>
        {
        productCategory.map(item => <CategoriesFilter key={item.name} categoryData={item} />)
        }
        </AccordionDetails>
      </Accordion>

      {/* 3 */}
      <Accordion className="sizefilter">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
        <p>Sizefilter</p> 
        </AccordionSummary>
        <AccordionDetails>

          <Sizefilter />

        </AccordionDetails>
      </Accordion>

      {/* 4 */}
      <Accordion className="iconfilter">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
       <p>IconButton</p>
      </AccordionSummary>
      <AccordionDetails>

        <IconButton />

      </AccordionDetails>
      </Accordion>

      {/* 5 */}
      <Accordion defaultExpanded className="accordion-actions">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <p>Accordion Actions </p>
        </AccordionSummary>
        <AccordionDetails>

          <Sizefilter />

        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion>

        {/* 6 */}
        <Accordion className="colorfilter">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
        <p>ColorFilter </p>
        </AccordionSummary>
        <AccordionDetails>

         <ColorFilter />

        </AccordionDetails>
        </Accordion>

    </div>
        
            <div className="row">
                {
                  products.map((product, i) => {
                      return <div key={i}>{product}</div>;
                  })
                }
            </div>
        </div>
        
        </>
    );   
}

export default FakeApiCall;
    