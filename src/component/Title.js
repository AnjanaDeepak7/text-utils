const Title = ({ heading }) => {
  return (
    <header className="heading d-flex justify-content-center align-items-center my-2 p-5">
      <h1 className="text-white font-monospace text-bg-dark p-3 rounded-4">
        {heading}
      </h1>
    </header>
  );
};

export default Title;
