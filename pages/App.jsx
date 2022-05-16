import Header from './components/header/Header'
import AdventCard from './components/adventCard/AdventCard'
import BaseItem from './components/baseItem/BaseItem'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Nav from './components/nav/Nav'

function App() {
  return (
    <div className="App">
      <Header />
      <body>
        <AdventCard />
        <BaseItem />
        <About />
        <Contact />
        <Experience />
        <Nav />
      </body>
      <Footer />
    </div>
  );
}

export default App;
