import { useEffect, useState } from "react";
import { URL } from "./constants/index";
import Table from "./components/Table";
import Search from "./components/Search";
import Sort from "./components/Sort";
import Form from "./components/Form";
export default function App() {
  const [people, setPeople] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortTerm, setSortTerm] = useState("");
  function handleSearch(e) {
    setSearchTerm(e.target.value);
  }
  function handleSortBy(e) {
    setSortTerm(e.target.value);
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
    setPeople(resData);
  }

  useEffect(function () {
    async function getData() {
      const response = await fetch(URL);
      const data = await response.json();
      return data;
    }
    getData().then((data) => setPeople(data));
  }, []);

  return (
    <div>
      <Search onChange={handleSearch} searchTerm={searchTerm} />
      <Sort sortTerm={sortTerm} onChange={handleSortBy} />
      <Table data={people} searchTerm={searchTerm} sortTerm={sortTerm} />
      <Form onAdd={handleAddPeople} />
    </div>
  );
}
