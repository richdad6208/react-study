import logo from "./logo.svg";
import "./App.css";
import { Header, Footer } from "./components/Header";
function App() {
  const name = "제성";

  return (
    <>
      <Header />
      <div>5555</div>
      <h1 className="active">{}</h1>
      <h1>야 호</h1>
      <p> 지금은 01 브랜치 작업중 입니다. </p>
      <Footer />
    </>
  );
}

export default App;
