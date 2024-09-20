export function ProductRow({productDetail}) {
    return (
        <div className="grid grid-cols-4 gap-4">
            <div>{productDetail.productName}</div>
            <div>{productDetail.role}</div>
            <div>{productDetail.status}</div>
            <div>{productDetail.finalDate}</div>
        </div>
    );
}