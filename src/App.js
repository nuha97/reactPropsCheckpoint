import logo from './logo.svg';
import './App.css';
import Profile from './profile/profileComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Profile name="Nuha Ahmed Haman"  profission="Programmer">
        <img src={logo} alt="Profile image" width={200} height={200} />
        </Profile>
      </header>
    </div>
  );
}

export default App;
