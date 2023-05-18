import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// Components
import Nav from '@/Components/Nav'
import FilterProvider from '@/context/FilterContext'

export default function App({ Component, pageProps }: AppProps) {
  return (<div>
    <FilterProvider>
      <Nav />
      <div className='max-w-4xl mx-auto px-3 py-8'>
        <Component {...pageProps} />
      </div>
    </FilterProvider>
  </div>)
}
