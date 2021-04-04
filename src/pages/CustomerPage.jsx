//NPM PAckages
import React from "react";

//Project files

import Search from "../components/Search";
import Parcel from "../components/Parcel";

export default function CustomerPage({ parameter, information }) {
  const result = information.filter((item) => {
    return item.user_name === parameter;
  });
  if (result[0] === undefined) {
    return (
      <div>
        <h1>No such user. Please Check the Username entered!</h1>
      </div>
    );
  } else
    return (
      <div className="Customer-Page">
        <h2 className="welcome-tag">Welcome {result[0].user_name}</h2>
        <Search />
        <table className="tab">
          <thead>
            <tr className="rows">
              <th>Parcel_ID</th>
              <th>Sender</th>
              <th>Status</th>
            </tr>
          </thead>
        </table>
        {information.map((item) => (
          <Parcel
            key={item.id}
            parcel_id={item.parcel_id}
            sender={item.sender}
            status={item.status}
          />
        ))}
      </div>
    );
}
