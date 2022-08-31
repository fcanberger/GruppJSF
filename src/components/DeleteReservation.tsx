export const DeleteReservation = () => {
  function handleDelete(e: any) {
    e.preventDefault();
    console.log("You clicked on delete");
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
