import { memo } from "react";
import Person from "./Person";

const List = ({ people, removePerson }) => {
  return (
    <div>
      {people.map((person) => {
        return (
          <div>
            <Person key={person.id} {...person} />
            <button id={person.id} onClick={() => removePerson(person.id)}>
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default memo(List);
