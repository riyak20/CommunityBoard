import './App.css';
import CardContainer from './components/CardContainer';

const App = () => {

  return (
    <div className="App">
      <h1> Popular US Nonprofits </h1>
        <h3> Here are important charitable organizations you can get involved with. Make an impact today! </h3>
        <CardContainer />
    </div>
  )
}

export default App;

