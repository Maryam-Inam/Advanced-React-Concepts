import { memo } from "react";
import Person from "./Person";

const List = ({ people, removePerson }) => {
  return (
    <div>
      {people.map((person) => {
        return (
          <div>
            <Person key={person.id} {...person} />
            <button id={person.id} onClick={removePerson}>
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default memo(List);
//memo makes the component render only 1 time if the props are not changed.
