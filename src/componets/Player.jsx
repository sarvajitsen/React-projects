import { useState } from "react";
export default function Player({ intname, symbol, isActive }) {
  const [isediting, setediting] = useState(false);
  const [name, setname] = useState(intname);
  const edit = () => {
    // setediting(!isediting) wrong state update in future
    setediting((editing) => !editing);
    // latest state update
  };
  const inputhandler = (e) => {
    setname(e.target.value);
  };
  return (
    <span className="player">
      <li className={isActive ? "active" : ""}>
        {isediting === true ? (
          <span className="player-name">
            <input
              type="text"
              requied
              value={name}
              onChange={(e) => inputhandler(e)}
            ></input>
          </span>
        ) : (
          <span className="player-name">{name}</span>
        )}
        <span className="player-symbol">{symbol}</span>
        <button onClick={edit}>{isediting ? "save" : "edit"}</button>
      </li>
    </span>
  );
}
