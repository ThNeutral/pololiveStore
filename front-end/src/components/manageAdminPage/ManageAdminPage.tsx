import { useState } from "react";
import { v4 } from "uuid";

interface UserItem {
  id: string;
  name: string;
  email: string;
}

const dummyUser: UserItem = {
  id: v4(),
  name: "John Doe",
  email: "johndoe@gmail.com",
};

const dummyUserSet: UserItem[] = Array<UserItem>(4).fill(dummyUser);

export function ManageAdminPage() {
  const [changed, setChanged] = useState(false);

  function handleDeleteAdmin(id: string) {
    dummyUserSet.splice(
      dummyUserSet.findIndex((value) => value.id === id),
      1
    );
    setChanged(!changed);
  }

  return (
    <div className="manageAdmin">
      {dummyUserSet.map((user) => {
        return (
          <div className="manageAdmin-item" key={user.id}>
            <div className="manageAdmin-item-text">
              <p className="manageAdmin-item-text-paragraph">{user.name}</p>
              <p className="manageAdmin-item-text-paragraph">{user.email}</p>
            </div>
            <p
              className="manageAdmin-item-link"
              onClick={() => handleDeleteAdmin(user.id)}
            >
              remove
            </p>
          </div>
        );
      })}
    </div>
  );
}
