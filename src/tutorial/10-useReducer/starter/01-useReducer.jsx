import React, { useReducer } from "react";
import { data } from "../../../data";
const ReducerBasics = () => {
  const defaultState = {
    people: data,
  };
  const reducer = (state, action) => {
    if (action.type === "CLEAR_ITEMS") {
      return {
        ...state,
        people: [],
      };
    }
    if (action.type === "RESET_ITEMS") {
      return {
        ...state,
        people: data,
      };
    }
    if (action.type === "REMOVE_ITEM") {
      console.log(state.people);
      let newPeople = state.people.filter(
        (person) => person.id !== action.payload.id
      );
      return {
        ...state,
        people: newPeople,
      };
    }
    return state;
  };
  const [state, dispatch] = useReducer(reducer, defaultState);
  // const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
  };
  const handleReset = () => {
    dispatch({ type: "RESET_ITEMS" });
    // setPeople(data);
  };
  const clearItems = () => {
    dispatch({ type: "CLEAR_ITEMS" });
    // setPeople([]);
  };
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}

      {state.people.length > 0 ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={clearItems}
        >
          clear items
        </button>
      ) : (
        <button className="btn" onClick={handleReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
