import './App.css';
import useFtech from './Useftech';

function App() {
  const [ft,setFt] = useFtech("https://openlibrary.org/search.json?q=ramayan&mode=ebooks&has_fulltext=true");
  console.log(ft.docs)
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={setFt}>Fetch Data</button>
        <p>See console after clicking this button</p>
      </header>
    </div>
  );
}

export default App;
