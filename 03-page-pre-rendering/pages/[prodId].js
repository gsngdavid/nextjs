import fs from 'fs/promises';
import path from 'path';
import { Fragment } from 'react';

function ProductDetailPage(props) {

    // if(!props.loadedProduct) {
    //     return <p>Loading...</p>
    // }

    const product = props.loadedProduct;

    return <Fragment>
        <h1>{ product.title }</h1>
        <p>{ product.description }</p>
    </Fragment>
}

export async function getStaticProps(context) {

    const { params } = context;

    const jsonData = await fs.readFile(path.join(process.cwd(), 'data', 'dummy-backend.json'));
    const data = JSON.parse(jsonData);

    const products = data.products;
    const product = products.find(product => product.id === params.prodId);

    return {
        props: {loadedProduct: product }
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { prodId: 'p1' } }
        ],
        fallback: 'blocking'
    }
}

export default ProductDetailPage;