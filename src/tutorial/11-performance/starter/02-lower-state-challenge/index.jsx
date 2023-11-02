import { useState } from "react";
import { data } from "../../../../data";
import List from "./List";
import AddUser from "./addUser";
const LowerStateChallenge = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <section>
      <AddUser setPeople={setPeople} people={people} />

      <List people={people} removePerson={removePerson} />
    </section>
  );
};
export default LowerStateChallenge;
