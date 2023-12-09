import "./style.css";

function App() {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" height="68" width="68" alt="Today I Learned Logo" />
        <h1>Learning Wave!</h1>
      </div>

      <button className="btn btn-large btn-open">Share A Fact</button>
    </header>
  );
}

export default App;
