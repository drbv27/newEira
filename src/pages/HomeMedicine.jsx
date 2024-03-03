import Layout from '../components/Layout'
import { Download } from '../components/Download'
import { Domicilio } from '../components/Domicilio'

export default function HomeMedicine() {
  return(
    <Layout>
      <Domicilio/>
      <Download/>
    </Layout>
  )
}