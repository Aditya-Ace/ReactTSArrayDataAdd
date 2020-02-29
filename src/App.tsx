import React, { useState } from "react";
import { TextInput } from "./components/TextInput";
function App() {
  const [addCardData, setAddCardData] = useState("");
  const [addCards, setAddCards] = useState<Array<string>>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddCardData(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setAddCards(prevState => [...prevState, addCardData]);
    setAddCardData("");
  };
  return (
    <div
      className="App"
      style={{ textAlign: "center", margin: "0 auto", marginTop: "10em" }}
    >
      <form onSubmit={handleSubmit}>
        <TextInput
          type="text"
          placeholder="Add Anything"
          handleChange={handleChange}
          value={addCardData}
        />
        <button type="submit">Add</button>
      </form>
      {addCards.map(addCard => (
        <h3>{addCard}</h3>
      ))}
    </div>
  );
}

export default App;
