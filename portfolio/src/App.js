import 'bootstrap/dist/css/bootstrap.min.css';
import './design/app.scss';
import Header from './components/header.jsx';
import Banner from './components/banner.jsx';
import About from './components/about.jsx';
import Work from './components/work.jsx';
import Experience from './components/experience.jsx';
import Connect from './components/connect.jsx';
import Footer from './components/footer.jsx';

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <About />
      <Experience />
      <Work />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
