

import Blog from '../components/Blog/Blog'
import Blog2 from '../components/Blog/Blog2'
import Header from '../components/Blog/Header'
import Header2 from '../components/Gallery/Header'
import Gallery from '../components/Gallery/Gallery'
import Footer from '../components/Footer'


export default function Pages1 () {
    return (
        <>
        <Header />
          <Blog />
          <Blog2 />
          <Header2/>
          {/* <Gallery/> */}
          <Footer/>
          
        </>
    )
}