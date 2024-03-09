import { Footer } from "./Footer"
import { Nav } from "./Nav"

const Layout = ({children}) => {
  return (
    <>
      <Nav />
      <div className="dark:bg-slate-800">
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout