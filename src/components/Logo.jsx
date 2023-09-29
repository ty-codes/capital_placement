import { logo } from "../assets";

export default function ogo() {
  return (
    <div className="logo-wrap">
      <img className="logo" src={logo} alt="logo" />
      <span className="name">
        <h3 className="b-600">Eco</h3>
        <h3 className="primary b-600">Cycle</h3>
      </span>
    </div>
  );
}
