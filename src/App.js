import Header from './Components/Header';
import Footer from './Components/Footer';
import BlogPage from './Components/BlogPage';
import './App.css';

function App() {
  return (
   <><Header/>
   <div className="container mx-auto">
    <BlogPage/>
   </div>
   <Footer/></>
  );
}

export default App;
