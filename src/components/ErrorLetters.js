import "../styles/Letters.scss";
import propTypes from "prop-types";

function ErrorLetters({ userLetters, word }) {
  const renderErrorLetters = () => {
    const errorLetters = userLetters.filter(
      (letter) =>
        word.toLocaleLowerCase().includes(letter.toLocaleLowerCase()) === false
    );
    return errorLetters.map((letter, index) => {
      return (
        <li key={index} className="letter">
          {letter}
        </li>
      );
    });
  };

  return (
    <div className="error">
      <h2 className="title">Letras falladas:</h2>
      <ul className="letters">{renderErrorLetters()}</ul>
    </div>
  );
}

ErrorLetters.defaultProps = {
  word: "perrete",
  userLetters: [], //esto son las letras de la usuaria
};

ErrorLetters.propTypes = {
  word: propTypes.string.isRequired,
  userLetters: propTypes.array,
};

export default ErrorLetters;
