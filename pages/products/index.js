import Link from 'next/link';
import React from 'react';

const Products = () => {

    const productList = [
        {id:1,name:'A21',price:'$230',src:''},
        {id:2,name:'A21',price:'$230',src:''},
        {id:3,name:'A21',price:'$230',src:''},
        {id:4,name:'A21',price:'$230',src:''},
        {id:5,name:'A21',price:'$230',src:''},
        {id:6,name:'A21',price:'$230',src:''},
    ]

    return (
        <div>
            {productList.map((product,index) => (
                <div key={index}>
                    <h4>{product.name}</h4>
                    <Link href={'/product/'} as={`/products/${product.id}`} >
                        <button className='px-2 py-1 bg-blue-500'>
                            details
                        </button>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Products;
