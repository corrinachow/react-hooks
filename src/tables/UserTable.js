import React from "react";

const UserTable = props => {
  const renderUsersTable = () => {
    if (props.users.length) {
      return props.users.map(user => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>
            <button
              className="button muted-button"
              onClick={() => {
                props.editRow(user);
              }}
            >
              Edit
            </button>
            <button
              className="button muted-button"
              onClick={() => props.deleteUser(user.id)}
            >
              Delete
            </button>
          </td>
        </tr>
      ));
    }

    return (
      <tr>
        <td colSpan={3}>No users</td>
      </tr>
    );
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{renderUsersTable()}</tbody>
    </table>
  );
};

export default UserTable;
