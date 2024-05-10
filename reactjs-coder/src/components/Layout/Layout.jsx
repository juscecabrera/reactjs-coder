import { Outlet }  from "react-router-dom";
import Footer from '../Footer/Footer';
import '../../main.css';
import NavBar from '../NavBar/NavBar';

function Layout() {
  return (
    <>
      <NavBar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Layout