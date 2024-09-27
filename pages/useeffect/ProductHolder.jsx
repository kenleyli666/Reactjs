import Image from 'next/image';

const ProductHolder = ({productData}) => {
    console.log('productData', productData)
    return (
        <div className="col border border-danger rounded-1 m-2">
            <div className="item-container p-3">
                <Image className="item-icon ratio ratio-1x1"
                    src={productData.image}
                    alt={productData.title}
                    width={100}
                    height={100} />
                <div className="item-title fs-3 pt-3">
                {productData.title}
                </div>
                <div className="item-price fw-bold">{productData.price}</div>
                <div className="item-description overflow-hidden pt-2">{productData.description}</div>
                <div className="item-category pt-2">{productData.category}</div>
            </div>
        </div>
    );
};

export default ProductHolder;