import './App.css';

function Title() {
  return (
      <h1>React Learning</h1>
  );
}

function Description() {
  return (
      <p>This website was designed to allow me to study and practice developing with the React framework</p>
  );
}

function App() {
  return (
    <div className="App">
      <Title />
      <Description />
    </div>
  );
}

export default App;
