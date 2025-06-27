import { useEffect, useState } from "react";
import { URL } from "./constants/index";
import Table from "./components/Table";
import Search from "./components/Search";
import Sort from "./components/Sort";
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
    </div>
  );
}
