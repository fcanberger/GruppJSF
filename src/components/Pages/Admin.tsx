export const Admin = () => {
  return (
    <div className="admin-container">
      <h2>Logga in</h2>
      <div className="form">
        <form>
          <div className="input-container">
            <label>Användarnamn </label>
            <input className="input-box" type="text" name="uname" required />
          </div>
          <div className="input-container">
            <label>Lösenord </label>
            <input className="input-box" type="password" name="pass" required />
          </div>
          <div className="button-container">
            <input className="btn-submit" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};
