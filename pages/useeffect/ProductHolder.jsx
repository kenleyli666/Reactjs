const ProductHolder = (propsData) => {
    const props = propsData.productData;
    
    return (
        <div className="col border border-danger rounded-1 m-2">
            <div className="item-container p-3">
                <img className="item-icon ratio ratio-1x1"
                    src={props.image}
                    alt={props.title} />
                <div className="item-title fs-3 pt-3">
                {props.title}
                </div>
                <div className="item-price fw-bold">{props.price}</div>
                <div className="item-description overflow-hidden pt-2">{props.description}</div>
                <div className="item-category pt-2">{props.category}</div>
            </div>
        </div>
    );
};

export default ProductHolder;
