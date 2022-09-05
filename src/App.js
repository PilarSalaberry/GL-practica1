import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TextColor from './components/TextColor/TextColor';
import UnorderedList from './components/UnorderedList/UnorderedList';

function App() {
  return (
    <div className="App">
      <Header />
      <UnorderedList />
      <TextColor />
      <Footer />
    </div>
  );
}

export default App;
