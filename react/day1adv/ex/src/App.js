import './App.css';
import BuggyCounter from './components/BuggyCounter';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <BuggyCounter/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
