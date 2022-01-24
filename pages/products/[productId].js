import React from 'react';
import {useRouter} from 'next/router'

const ProductId = () => {
    const router =useRouter()
    
    return (
        <div>
            product details {router.query.productId}
        </div>
    );
}

export default ProductId;
