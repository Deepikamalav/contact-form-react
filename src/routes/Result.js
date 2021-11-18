import "./../styles.css";
import { useLocation } from "react-router-dom";

export default function Result() {
  const location = useLocation();

  return (
    <div>
      <p>{location.state.name}</p>
      <p>{location.state.email}</p>
      <p>{location.state.password}</p>
      <p>{location.state.phone}</p>
      <p>{location.state.address}</p>
    </div>
  );
}
