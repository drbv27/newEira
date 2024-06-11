import Layout from "../components/Layout";
import { Download } from "../components/Download";
import { Recetas } from "../components/Recetas";

export default function RecetasHome() {
  return (
    <Layout>
      <Recetas />
      {/* <Download /> */}
    </Layout>
  );
}
