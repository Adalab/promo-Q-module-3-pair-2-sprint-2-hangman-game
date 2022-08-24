import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

// api
import getWordFromApi from '../services/api';
// styles
import '../styles/App.scss';
import '../styles/Form.scss';

//components
import Header from './Header';
import Dummy from './Dummy';
import SolutionLetters from './SolutionLetters';
import ErrorLetters from './ErrorLetters';
import Form from './Form';
import Footer from './Footer';
import Instructions from './Instructions';
import Options from './Options';

function App() {
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([]);
  const [lastLetter, setLastLetter] = useState('');

  useEffect(() => {
    getWordFromApi().then((word) => {
      setWord(word);
    });
  }, []);

  // events

  const handleMultiplayer = (value) => {
    setWord(value);
    setLastLetter('');
    setUserLetters([]);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleLastLetter = (value) => {
    value = value.toLocaleLowerCase();
    setLastLetter(value);

    if (!userLetters.includes(value)) {
      userLetters.push(value);
      setUserLetters([...userLetters]);
    }
  };

  const getNumberOfErrors = () => {
    const errorLetters = userLetters.filter(
      (letter) => word.includes(letter) === false
    );
    return errorLetters.length;
  };

  return (
    <div className="page">
      <Header />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <section>
                <SolutionLetters word={word} userLetters={userLetters} />
                <ErrorLetters word={word} userLetters={userLetters} />
                <Form
                  lastLetter={lastLetter}
                  handleSubmit={handleSubmit}
                  handleLastLetter={handleLastLetter}
                />
              </section>
            }
          />
          <Route path="/instructions" element={<Instructions />} />
          <Route
            path="/options"
            element={
              <Options word={word} handleMultiplayer={handleMultiplayer} />
            }
          />
        </Routes>

        <Dummy numberOfErrors={getNumberOfErrors()} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
