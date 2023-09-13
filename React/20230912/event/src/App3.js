import React, { useState } from "react";

function UserItem({ user }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    // onClick의 이벤트 핸들러는 함수 자체가 전달되어야 해서 함수 이름, 익명함수를 넣어준다.
    // 익명함수를 넣기 싫으면 핸들러 함수를 따로 만들어서 이름만 넣어준다. Ex) function handle() {}
    <li onClick={() => setShowInfo(!showInfo)}>
      {user.name}
      {showInfo ? (
        <div>
          <div>email : {user.email}</div>
          <div>job : {user.job}</div>
        </div>
      ) : null}
    </li>
  );
}

function UserList({ users }) {
  return (
    <ul>
      {users.map((item) => {
        return <UserItem key={item.id} user={item} />;
      })}
    </ul>
  );
}

export default function App3() {
  const users = [
    { id: 1, name: "Alice", email: "alice@example.com", job: "Engineer" },
    { id: 2, name: "Bob", email: "bob@example.com", job: "Designer" },
    { id: 3, name: "Charlie", email: "charlie@example.com", job: "Manager" },
  ];

  return (
    <div>
      <h1>user list</h1>
      <UserList users={users} />
    </div>
  );
}
