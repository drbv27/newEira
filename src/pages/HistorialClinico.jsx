import Layout from '../components/Layout'
import { Download } from '../components/Download'
import { HistorialClinico } from '../components/HistorialClinico'

export default function Ambulance() {
  return(
    <Layout>
      <HistorialClinico/>
      {/* <Download/> */}
    </Layout>
  )
}