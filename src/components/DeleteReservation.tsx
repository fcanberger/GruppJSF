import axios from "axios";

export const DeleteReservation = () => {
  function handleDelete(e: any) {
    e.preventDefault();
    console.log(e.target.id);
    axios
      .delete("http://localhost:8000/show/delete/" + e.target.id)
      .then((response) => {
        console.log(response);
      });
  }

  return (
    <>
      <div>
        <button className="btn" onClick={handleDelete}>
          Ta bort bokning
        </button>
      </div>
    </>
  );
};
