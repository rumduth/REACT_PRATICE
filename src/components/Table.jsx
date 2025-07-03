import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { LIMIT_PER_PAGE } from "../constants";
import { useEmployee } from "../context/EmployeeProvider";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Pname</th>
        <th>Pprice</th>
        <th>Pdescription</th>
        <th>Action</th>
      </tr>
    </thead>
  );
};

const TableRow = ({ row }) => {
  return (
    <tbody>
      <tr>
        <td>{row.Pname}</td>
        <td>{row.Pprice}</td>
        <td>{row.Pdescription}</td>
        <td>
          <button>Edit</button>
          <button>Delete</button>
        </td>
      </tr>
    </tbody>
  );
};

const TableFooter = ({ children }) => {
  return (
    <tfoot>
      <tr>
        <td>{children}</td>
      </tr>
    </tfoot>
  );
};

export default function Table() {
  let { people: data, searchTerm, sortTerm } = useEmployee();
  const [currentPage, setCurrentPage] = useState(1);
  let filteredData = data;
  searchTerm = searchTerm.trim();
  if (searchTerm)
    filteredData = data.filter((el) =>
      el.Pname.toLowerCase().includes(searchTerm.toLowerCase())
    );
  if (sortTerm === "asc") filteredData.sort((a, b) => a.Pprice - b.Pprice);
  if (sortTerm === "dsc") filteredData.sort((a, b) => b.Pprice - a.Pprice);
  let totalRows = filteredData.length;
  let totalPages = Math.ceil(totalRows / LIMIT_PER_PAGE);

  useEffect(
    function () {
      setCurrentPage(1);
    },
    [searchTerm]
  );

  function handleNextPage() {
    if (currentPage === totalPages) return;
    setCurrentPage((prev) => prev + 1);
  }
  function handlePrevPage() {
    if (currentPage === 1) return;
    setCurrentPage((prev) => prev - 1);
  }
  filteredData = filteredData.slice(
    (currentPage - 1) * LIMIT_PER_PAGE,
    Math.min(currentPage * LIMIT_PER_PAGE, totalRows)
  );
  return (
    <table>
      <TableHeader />
      {filteredData.map((row) => (
        <TableRow key={row.id} row={row} />
      ))}
      <TableFooter>
        <Pagination
          onNext={handleNextPage}
          onPrev={handlePrevPage}
          btnDisabled={[currentPage <= 1, currentPage >= totalPages]}
        />
        <p>
          Current showing {currentPage} / {totalPages} pages
        </p>
      </TableFooter>
    </table>
  );
}
//31 -> 30 -> min(31,35)
