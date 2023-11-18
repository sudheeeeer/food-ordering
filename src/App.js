import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Cart from './Cart';
import AppLayout from './AppLayout';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/cantact',
        element: <Contact />
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ]
  }

]);

function App() {
  return (
    <RouterProvider router={router} />
    // <Router>
    //   <Navbar />
    //   <Routes>
    //     <Route path='/login' element={<Login />} />
    //     <Route path='/' element={<Home />} />
    //     <Route path='/about' element={<About />} />
    //     <Route path='/contact' element={<Contact />} />
    //     <Route path='/cart' element={<Cart />} />
    //   </Routes>
    //   <Footer />
    // </Router>
  );
}

export default App;
