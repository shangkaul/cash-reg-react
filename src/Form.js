import "./styles.css";

export default function Form(props) {
  function formHandler(e) {
    e.preventDefault();
    props.handleForm(e.target.cash.value, e.target.amt.value);
  }
  return (
    <div className="Form">
      <form onSubmit={formHandler.bind(this)}>
        <div className="forminp">
          <label>Bill Amount</label>
          <input type="number" name="cash" />
        </div>
        <br />
        <div className="forminp">
          <label>Cash Recieved</label>
          <input type="number" name="amt" />
        </div>
        <input className="sub-btn" type="submit" value="Submit" />
      </form>
    </div>
  );
}
