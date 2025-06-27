export default function Sort({ sortTerm, onChange }) {
  return (
    <select name="" id="" onChange={onChange} value={sortTerm}>
      <option value="normal">Normal</option>
      <option value="asc">Price Ascending</option>
      <option value="dsc">Price Descending</option>
    </select>
  );
}
