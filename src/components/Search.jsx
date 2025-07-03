import { useEmployee } from "../context/EmployeeProvider";

export default function Search() {
  const { searchTerm, handleSearch } = useEmployee();
  return (
    <div>
      <label htmlFor="search">Search</label>
      <input
        id="search"
        type="text"
        name="search"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
}
