import React from "react";
import { useEffect, useState } from "react";

function Edit() {
  const [edit, setEdit] = useState(false);

  const updateUser = () => {
    //update action
    setEdit(false);
  };
  return (
    <div>
      <label>Edit</label>
      <input id="input1" type="text" placeholder="First Name" />
      <input id="input1" type="text" placeholder="Last Nameame" />
      <input id="input1" type="number" placeholder="Age" />
      <input id="input1" type="text" placeholder="Email" />
      <button onClick={() => setEdit(edit + updateUser)}>Save</button>
    </div>
  );
}

export default Edit;
