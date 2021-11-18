import { useState } from "react";
import "./../styles.css";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();

  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  function validate() {
    if (name.length < 5) {
      setText("name should be more than 5 characters");
      return false;
    }
    if (email.indexOf("@") == -1 || email.length < 6) {
      setText("please enter valid email");
      return false;
    }
    if (password.length < 8) {
      setText("please enter password more than 8 characters");
      return false;
    }
    if (isNaN(phone) || phone.length != 10) {
      setText("please enter valid phone number");
      return false;
    }
    if (address.length <= 25) {
      setText("please enter more than 25 characters");
      return false;
    }
    history.push({
      pathname: "/result",
      state: {
        name: name,
        email: email,
        password: password,
        phone: phone,
        address: address
      }
    });
    return true;
  }

  return (
    <div className="wrapper">
      <h2>contact us</h2>
      <div id="error_message">{text}</div>
      <div className="input_filed">
        <input
          type="text"
          value={name}
          placeholder="name"
          required
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input_filed">
        <input
          type="text"
          value={email}
          placeholder="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input_filed">
        <div className="input_filed">
          <input
            type="text"
            value={password}
            placeholder="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="input_filed">
        <div className="input_filed">
          <input
            type="text"
            value={phone}
            placeholder="phone"
            required
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
      <div className="input_filed">
        <div className="input_filed">
          <input
            type="text"
            value={address}
            placeholder="address"
            required
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
      </div>
      <div className="btn">
        <input type="submit" onClick={() => validate()} />
      </div>
    </div>
  );
}
