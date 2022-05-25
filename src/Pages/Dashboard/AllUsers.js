import React from "react";
import UsersRow from "./UsersRow";

const AllUsers = () => {
  return (
    <div>
      <h2 className="text-2xl">All Users:</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
              <UsersRow />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
