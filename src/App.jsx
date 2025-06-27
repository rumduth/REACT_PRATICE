import { useEffect, useState } from "react";
import { URL } from "./constants/index";
import Table from "./components/Table";
import Search from "./components/Search";
export default function App() {
  const [people, setPeople] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(val) {
    setSearchTerm(val);
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
      <Search onChange={handleSearch} value={searchTerm} />
      <Table data={people} searchTerm={searchTerm} />
    </div>
  );
}
