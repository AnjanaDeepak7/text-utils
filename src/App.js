import Title from "./component/Title";
import InputText from "./component/InputText";
import Buttons from "./component/Buttons";
import Footer from "./component/Footer";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <Title heading="Text Area" />
      <InputText value={value} setValue={setValue} />
      <Buttons value={value} setValue={setValue} />
      <Footer value={value} />
    </div>
  );
}

export default App;
