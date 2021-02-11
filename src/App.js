import './App.css';
import CreateTask from './Components/CreateTask';

function App() {
  return (
    <div> 
      <main className="App container-xl vertical-center">
        <section className='col-12'><CreateTask /></section>
      </main>
      <footer className='text-right'>Made with️ ❤️ in BA</footer>
    </div>
   
  );
}

export default App;