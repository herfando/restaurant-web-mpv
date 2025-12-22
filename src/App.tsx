import './index.css';
// import Login from '@/pages/01_Login';
// import Register from './pages/02_Register';
// import AppRoutes from '@/routes/Routes';
// import NavbarGuest from './components/layout/01_NavbarGuest';
import NavbarGuest2 from './components/layout/01_NavbarGuest2';
// import Home from '@/pages/03_Home';
// import Detail from './pages/04_Detail';
// import Category from './pages/05_Category';
// import MyCart from './pages/06_MyCart';
import Footer from './components/layout/03_Footer';
import CheckOut from './pages/07_CheckOut';

function App() {
  return (
    <>
      {/* <AppRoutes /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <NavbarGuest /> */}
      <NavbarGuest2 />
      {/* <Home /> */}
      {/* <Detail /> */}
      {/* <Category /> */}
      {/* <MyCart /> */}
      <CheckOut />
      <Footer />
    </>
  );
}

export default App;
