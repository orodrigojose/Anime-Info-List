import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './shared/components/navbar';
import Footer from './shared/components/footer';
import NotFound from './pages/404';
import Anime from './pages/Anime';
import Home from './pages/Home';

export const Router = () => {
  return (
    <BrowserRouter>
    	<NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/anime/:id" element={<Anime/>} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}