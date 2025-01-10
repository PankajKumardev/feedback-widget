import './App.css';
import FeedbackWidget from './components/FeedbackWidget';

function App() {
  return (
    <div>
      <FeedbackWidget projectId={1} websiteName="My Website" />
    </div>
  );
}

export default App;
