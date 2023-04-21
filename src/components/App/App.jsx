import AddForm from "../AddForm/AddForm";
import Female from "../Female/Female";
import Header from "../Header/Header";
import Male from "../Male/Male";
import { useState } from "react";

function App() {
  const [people, setPeople] = useState([
    {
      id: 1,
      name: "Anna",
      link: "https://i0.wp.com/vekavrory.ru/wp-content/uploads/2022/02/2914228979.jpg?fit=801%2C765&ssl=1",
      sex: "female",
    },
    {
      id: 2,
      name: "Max",
      link: "https://thumbs.dreamstime.com/z/%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5%D0%BB%D1%8F-%D0%BC%D0%B5%D1%81%D1%82%D0%B0-%D0%B7%D0%B0%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-%D1%84%D0%BE%D1%82%D0%BE-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D0%B0-%D1%81%D0%B5%D1%80%D1%8B%D0%B9-132818487.jpg",
      sex: "male",
    },
    {
      id: 3,
      name: "Nick",
      link: "https://thumbs.dreamstime.com/z/%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5%D0%BB%D1%8F-%D0%BC%D0%B5%D1%81%D1%82%D0%B0-%D0%B7%D0%B0%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-%D1%84%D0%BE%D1%82%D0%BE-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D0%B0-%D1%81%D0%B5%D1%80%D1%8B%D0%B9-132818487.jpg",
      sex: "male",
    },
    {
      id: 4,
      name: "Yulia",
      link: "https://i0.wp.com/vekavrory.ru/wp-content/uploads/2022/02/2914228979.jpg?fit=801%2C765&ssl=1",
      sex: "female",
    }
  ]);

  const addPeople = (e) => {
    e.preventDefault();
    const { name, link, sex } = e.target;
    const newEntry = {
      id: Date.now(),
      name: name.value,
      link: link.value,
      sex: sex.value,
    };
    setPeople([...people, newEntry]);
    name.value = "";
    link.value = "";
    sex.value = "";
  };

  return (
    <div>
      <Header />
      <AddForm addPeople={addPeople} />
      <Male people={people} />
      <Female people={people} />
    </div>
  );
}

export default App;
