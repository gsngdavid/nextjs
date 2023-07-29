import { SWRConfig } from 'swr'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <SWRConfig value={{fetcher: (resource, init) => fetch(resource, init).then(res => {
    if(res.ok) return res.json();
    throw('Something went wrong');
  })}}>
    <Component {...pageProps} />
  </SWRConfig>
}

export default MyApp
