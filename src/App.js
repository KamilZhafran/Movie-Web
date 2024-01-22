import './App.css';
import NavigationBar from './components/NavigationBar';
import "./style/landingPage.css";
import Intro from './components/intro';
import Trending from './components/trending';
import Superhero from './components/superhero';

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      <div className="trending">
        <Trending />
      </div>
      <div className="superhero">
        <Superhero/>
      </div>
    </div>
    
  );
}

export default App;
