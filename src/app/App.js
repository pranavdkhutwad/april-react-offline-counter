import Header from "./shared/header/Header";
import Counter from "./features/counter/Counter";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <main className="container">
        <Counter />
      </main>
    </div>
  );
}

export default App;
