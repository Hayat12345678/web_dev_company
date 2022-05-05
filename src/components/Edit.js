import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Edit() {
  const { userId } = useParams(userId);
  const [edit, setEdit] = useState(false);

  const updateUser = () => {
    //update action
    setEdit(false);
  };
  return (
    <div>
      <label>Edit</label>
      <input id="input1" type="text" placeholder="Forname" />
      <input id="input1" type="text" placeholder="Nachname" />
      <input id="input1" type="text" placeholder="Age" />
      <input id="input1" type="text" placeholder="Email" />
      <button onClick={() => setEdit(edit + updateUser)}>Save</button>
    </div>
  );
}

export default Edit;
