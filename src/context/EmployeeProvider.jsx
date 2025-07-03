import { createContext, useContext, useEffect, useReducer } from "react";
import { URL } from "../constants";
const Context = createContext();

const initialState = {
  people: [],
  searchTerm: "",
  sortTerm: "",
};

// action : {type: XXX, payload: ''}

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_SORT_TERM":
      return { ...state, searchTerm: action.payload };
    case "UPDATE_SEARCH_TERM":
      return { ...state, sortTerm: action.payload };
    case "UPDATE_PEOPLE":
      return { ...state, people: action.payload };
    default:
      return { ...initialState };
  }
}

export default function EmployeeProvider({ children }) {
  const [{ people, sortTerm, searchTerm }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function handleSearch(e) {
    dispatch({ type: "UPDATE_SEARCH_TERM", payload: e.target.value });
  }
  function handleSortBy(e) {
    dispatch({ type: "UPDATE_SORT_TERM", payload: e.target.value });
  }
  async function handleAddPeople(data) {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    let response = await fetch(URL);
    let resData = await response.json();
    dispatch({ type: "UPDATE_PEOPLE", payload: resData });
  }

  useEffect(function () {
    async function getData() {
      const response = await fetch(URL);
      const data = await response.json();
      return data;
    }
    getData().then((data) =>
      dispatch({ type: "UPDATE_PEOPLE", payload: data })
    );
  }, []);

  return (
    <Context.Provider
      value={{
        people,
        searchTerm,
        sortTerm,
        handleAddPeople,
        handleSearch,
        handleSortBy,
      }}
    >
      {children}
    </Context.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useEmployee() {
  const value = useContext(Context);
  if (!value) throw new Error("Wrong store access");
  return value;
}
