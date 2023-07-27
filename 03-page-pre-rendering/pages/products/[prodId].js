import fs from 'fs/promises';
import path from 'path';
import { Fragment } from 'react';

function ProductDetailPage(props) {

    if(!props.loadedProduct) {
        return <p>Loading...</p>
    }

    const product = props.loadedProduct;

    return <Fragment>
        <h1>{ product.title }</h1>
        <p>{ product.description }</p>
    </Fragment>
}

async function getData() {
    const jsonData = await fs.readFile(path.join(process.cwd(), 'data', 'dummy-backend.json'));
    const data = JSON.parse(jsonData);

    return data.products;
}

export async function getStaticProps(context) {

    const { params } = context;

    const products = await getData();
    const product = products.find(product => product.id === params.prodId);

    if(!product) {
        return { notFound: true };
    }

    return {
        props: {loadedProduct: product }
    }
}

export async function getStaticPaths() {

    const products = await getData();
    const ids = products.map(product => product.id);
    const pathsArray = ids.map(id => ({params: {prodId: id}})).filter((el, i) => i !== 0); // Exclude p1

    return {
        paths: pathsArray,
        fallback: true
    }
}

export default ProductDetailPage;