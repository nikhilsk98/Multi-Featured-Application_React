import { useState } from "react";
import DropDown from "./components/DropDown";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";

function App() {
  const [selected, setSelected] = useState(null);
  const handleSelection = (option) => {
    setSelected(option);
  };
  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];
  return (
    <DropDown options={options} value={selected} onChange={handleSelection} />
  );
}

export default App;
