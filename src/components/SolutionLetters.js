import "../styles/Letters.scss";
import propTypes from "prop-types";

function SolutionLetters({ word, userLetters }) {
  const renderSolutionLetters = () => {
    const wordLetters = word.split("");
    return wordLetters.map((letter, index) => {
      const exists = userLetters.includes(letter.toLocaleLowerCase());
      return (
        <li key={index} className="letter">
          {exists ? letter : ""}
        </li>
      );
    });
  };

  return (
    <div className="solution">
      <h2 className="title">Solución:</h2>
      <ul className="letters">{renderSolutionLetters()}</ul>
    </div>
  );
}

SolutionLetters.defaultProps = {
  word: "perrete",
  userLetters: [], //esto son las letras de la usuaria
};

SolutionLetters.propTypes = {
  word: propTypes.string.isRequired,
  userLetters: propTypes.array,
};

export default SolutionLetters;
