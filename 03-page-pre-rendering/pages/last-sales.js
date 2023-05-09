import { useEffect, useState } from "react"
import useSWR from 'swr';


function LastSalesPage(props) {
    
    const [sales, setSales] = useState(props.sales);
    // const [ isLoading, setIsLoading ] = useState(false);
    
    // useEffect(() => {
    //     setIsLoading(true);
    //     fetch(
    //         'https://nextjs-course-3eae2-default-rtdb.firebaseio.com/sales.json'
    //         ).then(response => response.json()
    //         ).then(data => {
    //             console.log(isLoading);
    //             let transformedSales = [];

    //             for(const key in data) {
    //                 transformedSales.push({id: key, username: data[key].username, volume: data[key].volume});
    //             }
            
    //         setSales(transformedSales);
    //     });
    //     setIsLoading(false);
    // }, [setIsLoading]);
    // const fetcher = url => fetch(url).then(r => r.json())
    const { data, error } = useSWR('https://nextjs-course-3eae2-default-rtdb.firebaseio.com/sales.json');
    
    useEffect(() => {
        if(data) {
            let transformedSales = [];

            for(const key in data) {
                transformedSales.push({id: key, username: data[key].username, volume: data[key].volume});
            }

            setSales(transformedSales);
        }
    }, [data])

    if(error) {
        return <p>Failed to load data</p>;
    }

    if(!data && !sales) {
        return <p>Loading...</p>;
    }

    return <ul>
            {sales.map(sale => <li key={sale.id}>{sale.username} - ${sale.volume}</li>)}
        </ul>;
}

export default LastSalesPage;

export async function getStaticProps() {
    
    return fetch(
        'https://nextjs-course-3eae2-default-rtdb.firebaseio.com/sales.json'
        ).then(response => response.json()
        ).then(data => {
            let transformedSales = [];

            for(const key in data) {
                transformedSales.push({id: key, username: data[key].username, volume: data[key].volume});
            }

            return {
                props: {sales: transformedSales},
                revalidate: 10
            }
        });
}