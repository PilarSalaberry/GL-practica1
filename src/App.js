import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import States from './components/States/States';
import TextColor from './components/TextColor/TextColor';
import UnorderedList from './components/UnorderedList/UnorderedList';
import WeatherWidgetContainer from './components/Weather/WeatherWidgetContainer/WeatherWidgetContainer';

function App() {
  return (
    <div className="App">
      <Header />
     {/*  <UnorderedList />
      <TextColor /> */}
      {/* <WeatherWidgetContainer /> */}
      <States />
      <Footer />
    </div>
  );
}

export default App;
