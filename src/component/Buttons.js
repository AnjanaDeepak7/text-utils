const Buttons = ({ value, setValue }) => {
  const convertToUpperCase = () => {
    let textUpperCase = value.toUpperCase();
    setValue(textUpperCase);
  };
  const converToLowerCase = () => {
    let textLowerCase = value.toLowerCase();
    setValue(textLowerCase);
  };
  const clearText = () => {
    let textValue = "";
    setValue(textValue);
  };
  return (
    <div>
      <button
        className="btn btn-primary my-2 mx-3"
        type="submit"
        aria-label="upper case"
        onClick={convertToUpperCase}
      >
        Click for Upper Case
      </button>
      <button
        className="btn btn-primary my-2 mx-3"
        type="submit"
        aria-label="lower case"
        onClick={converToLowerCase}
      >
        Click for Lower Case
      </button>
      <button
        className="btn btn-primary my-2 mx-3"
        type="submit"
        aria-label="clear text"
        onClick={clearText}
      >
        Clear Text
      </button>
    </div>
  );
};

export default Buttons;
