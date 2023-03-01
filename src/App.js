import Header from "./Components/Header/Header";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Rowpost from "./Components/rowpost/Rowpost";
import {
  Popular,
  Action,
  Horror,
  Comedy,
  Drama,
  Animation,
  SciFi,
  Thriller,
  Western,
} from "./Urls";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner url={Popular} />
      <Rowpost url={Popular} title="Most Popular" />
      <Rowpost url={Action} title="Action" isSmall />
      <Rowpost url={Horror} title="Horror" isSmall />
      <Rowpost url={SciFi} title="Scfi" isSmall />
      <Rowpost url={Thriller} title="Thriller" isSmall />
      <Rowpost url={Drama} title="Drama" isSmall />
      <Rowpost url={Comedy} title="Comedy" isSmall />
      <Rowpost url={Western} title="Western" isSmall />
      <Rowpost url={Animation} title="Animation" isSmall />
    </div>
  );
}

export default App;
