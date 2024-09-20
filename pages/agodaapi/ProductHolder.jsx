const ProductHolder = (propsData) => {
    const props = propsData.productData;
    
    return (
        <div className="col border border-danger rounded-1 m-2">
            <div className="item-container p-3">
                {/* <div className="item-icon ratio ratio-1x1">{props.properties.searchResult.totalActiveHotels}</div>
                <div className="item-title fs-3 pt-3">{props.properties.geoPlaces.cityName}</div>
                <div className="item-price fw-bold">{props.data.type}</div>
                <div className="item-description overflow-hidden pt-2">{props.type}</div> */}
                <div className="item-category pt-2">{props.price}</div>
            </div>
        </div>
    );
};

export default ProductHolder;
