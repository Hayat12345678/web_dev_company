import React from "react";
<<<<<<< HEAD
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
=======
import { useState } from "react";
>>>>>>> 4362b3b22b485e1b3d29d58c32ca0ef79b996fec

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
      <input id="input1" type="text" placeholder="First Name" />
      <input id="input1" type="text" placeholder="Last Nameame" />
      <input id="input1" type="number" placeholder="Age" />
      <input id="input1" type="text" placeholder="Email" />
      <button onClick={() => setEdit(edit + updateUser)}>Save</button>
    </div>
  );
}

export default Edit;
