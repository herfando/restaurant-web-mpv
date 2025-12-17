import './index.css';
// import Login from '@/pages/01_Login';
// import Register from './pages/02_Register';
// import AppRoutes from '@/routes/Routes';
import NavbarGuest from './components/layout/01_NavbarGuest';
import Home from '@/pages/03_Home';

function App() {
  return (
    <>
      {/* <AppRoutes /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      <NavbarGuest />
      <Home />
    </>
  );
}

export default App;
