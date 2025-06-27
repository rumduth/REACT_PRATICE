export default function Search({ onChange, searchTerm }) {
  return (
    <div>
      <label htmlFor="search">Search</label>
      <input
        type="text"
        name="search"
        placeholder="Search by name"
        value={searchTerm}
        onChange={onChange}
      />
    </div>
  );
}
