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

function CurrentDate(props) {
  return (
    <p>The current date is {props.day}/{props.month}/{props.year}</p>
  );
}

function App() {
  return (
    <div className="App">
      <Title />
      <Description />
      <CurrentDate day={new Date().getDate()} month={new Date().getMonth()+1} year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
