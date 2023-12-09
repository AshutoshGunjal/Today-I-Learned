import "./style.css";

function App() {
  const appTitle = "Learning Wave!";

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <img
            src="logo.png"
            height="68"
            width="68"
            alt="Today I Learned Logo"
          />
          <h1>{appTitle}</h1>
        </div>

        <button className="btn btn-large btn-open">Share A Fact</button>
      </header>

      <NewFactForm />
      <main className="main">
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
}

function NewFactForm() {
  return <form className="fact-form">New Fact Form</form>;
}

function CategoryFilter() {
  return <aside>Category Filters</aside>;
}

function FactList() {
  return <section>Facts List</section>;
}

export default App;
