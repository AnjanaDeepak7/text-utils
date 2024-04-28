const Footer = ({ value }) => {
  return (
    <footer className="mx-2 text-details text-dark fs-5 border border-2 shadow border-black rounded px-3 pt-2 align-items-center">
      <p className="fw-bold">
        Words {value.split(" ").length} characters {value.length}
      </p>
      <p className="fw-bold">
        {0.008 * value.split(" ").length} minutes to read..
      </p>
    </footer>
  );
};

export default Footer;
