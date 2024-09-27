import { ProductRow } from "./ProductRow";

export function ProductTable({products}) {
    console.log('products', products);
    
    return (
        <div>
            {
                products.map((product, i) => {
                    return (
                        <ProductRow
                            key={i}
                            productDetail={product}
                        />
                    )
                })
            }
        </div>
    );
}

export default ProductTable;