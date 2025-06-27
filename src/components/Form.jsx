export default function Form({ onAdd }) {
  function handleSubmit(e) {
    e.preventDefault();
    let fd = new FormData(e.target);
    let Pname = fd.get("pName");
    let Pprice = fd.get("pPrice");
    let Pdescription = fd.get("pDescription");
    if (!Pname || !Pprice || !Pdescription) return;
    onAdd({ Pname, Pprice, Pdescription });
    e.target.reset();
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="pName" />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input type="number" name="pPrice" />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input type="text" name="pDescription" />
      </div>

      <button>Submit</button>
    </form>
  );
}
