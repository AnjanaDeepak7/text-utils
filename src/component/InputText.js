const InputText = ({ value, setValue }) => {
  return (
    <>
      <div className="container mx-3 text-dark">
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label mx-3 fs-3"
        >
          Enter Text Here...
        </label>
        <textarea
          className="form-control border border-dark border-3 rounded-4"
          id="exampleFormControlTextarea1"
          rows="8"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
      </div>
    </>
  );
};

export default InputText;
