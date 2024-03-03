import Layout from '../components/Layout'
import { Download } from '../components/Download'
import { Teleconsulta } from '../components/Teleconsulta'

export default function Telemedicine() {
  return(
    <Layout>
      <Teleconsulta/>
      <Download/>
    </Layout>
  )
}