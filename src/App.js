import React, { useState } from "react";
import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";

const App = () => {
  // INITIAL STATE
  const usersData = [
    { id: 1, name: "Corrina", username: "lohengramm" },
    { id: 2, name: "Bean", username: "beautiful-bouncing-baby-boy-2015" },
    { id: 3, name: "Peeb", username: "screaming-babo-2015" }
  ];

  // Sets form initial state
  const initialFormState = { id: null, name: "", username: "" };

  const [users, setUsers] = useState(usersData);

  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = id => {
    // Prevents "editing mode" from presisting after deletion of user in edit mode
    setEditing(false);
    setUsers(users.filter(user => user.id !== id));
  };

  // EDITING USERS
  const [editing, setEditing] = useState(false);

  // Handles state change when new user is selected for editing
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = user => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    // Loops through current users list, creates new list of users with the update user info
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  const renderForms = () =>
    // Checks if user is currenctly editing a user and renders form accordingly
    editing ? (
      <div>
        <h2>Edit user</h2>
        <EditUserForm
          editing={editing}
          setEditing={setEditing}
          currentUser={currentUser}
          updateUser={updateUser}
        />
      </div>
    ) : (
      <div>
        <h2>Add user</h2>
        <AddUserForm addUser={addUser} />
      </div>
    );

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">{renderForms()}</div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );
};

export default App;
