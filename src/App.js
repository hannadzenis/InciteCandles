import { Header } from "./components/Header.jsx";
import { Categories } from "./components/Categories.jsx";
import { Sort } from "./components/Sort.jsx";
import { CandlesList } from "./components/CandleList.jsx";
import "./styles/app.scss";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Categories />
        <Sort />
        <CandlesList />
      </div>
    </div>
  );
}

export default App;
