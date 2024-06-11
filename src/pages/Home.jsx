import Layout from '../components/Layout'
import { Hero } from '../components/Hero'
import { Content } from '../components/Content'
import Carousel from '../components/Carousel'

export default function Home() {
  return(
    <Layout>
      <Hero/>
      <Carousel/>
      <Content/>
    </Layout>
  )
}