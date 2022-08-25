import SolutionLetters from "./SolutionLetters";
import propTypes from "prop-types";

function Form({ handleSubmit, handleLastLetter, lastLetter }) {
  //funciones del form
  const handleKeyDown = (ev) => {
    // Sabrías decir para qué es esta línea
    ev.target.setSelectionRange(0, 1);
  };

  const handleChange = (ev) => {
    let re = /[a-zA-Z]/; //add regular pattern - lesson 3.3 exercise 2
    if (re.test(ev.target.value)) {
      handleLastLetter(ev.target.value);
    }
  };
  //return
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="title" htmlFor="last-letter">
        Escribe una letra:
      </label>
      <input
        autoFocus
        autoComplete="off"
        className="form__input"
        maxLength="1"
        type="text"
        name="last-letter"
        id="last-letter"
        value={lastLetter}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
    </form>
  );
}

SolutionLetters.defaultProps = {
  lastLetter: "r",
};

SolutionLetters.propTypes = {
  lastLetter: propTypes.string,
};

export default Form;
