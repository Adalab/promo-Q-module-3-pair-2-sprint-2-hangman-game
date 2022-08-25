function Options({ handleMultiplayer, word }) {
  const handleForm = (ev) => {
    ev.preventDefault();
  };

  const handleChange = (ev) => {
    handleMultiplayer(ev.target.value);
  };

  return (
    <form onSubmit={handleForm}>
      <label className="title" htmlFor="word">
        Escribe aquí la palabra que hay que adivinar:
      </label>
      <input
        autoFocus
        autoComplete="off"
        className="form__input"
        maxLength="15"
        type="text"
        id="word"
        name="word"
        onChange={handleChange}
        value={word}
      />
    </form>
  );
}

Options.defaultProps = {
  word: "perrete",
};

export default Options;
