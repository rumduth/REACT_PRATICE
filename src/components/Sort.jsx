import { useEmployee } from "../context/EmployeeProvider";

export default function Sort() {
  const { sortTerm, handleSortBy } = useEmployee();
  return (
    <select name="" id="" onChange={handleSortBy} value={sortTerm}>
      <option value="normal">Normal</option>
      <option value="asc">Price Ascending</option>
      <option value="dsc">Price Descending</option>
    </select>
  );
}
