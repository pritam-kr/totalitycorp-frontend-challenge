import React from "react";
import "./add.css";

const Add = () => {
  return (
    <div className="add">
      <p style={{ textAlign: "right", fontSize: "1.3rem" }}>Ad</p>

      <div>
        <p>Pritam, unlock your full potential with LinkedIn Premium</p>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQH8GSgTZ8o9Mg/profile-displayphoto-shrink_100_100/0/1657293173416?e=1671667200&v=beta&t=-11WH32vmcdToXW2EXBhPnaNbZ656DlUeC8TOZVBiMs"
          className="rounded"
          alt=""
        />{" "}
        <img
          src="https://media-exp1.licdn.com/dms/image/C560EAQGlaqaN2qg-xQ/rightRail-logo-shrink_200_200/0/1636732329458?e=1667030400&v=beta&t=OqyK96BmOLQBgwYvsF1frV4EU8UK9wBYRcrA5RU-PwY"
          alt=""
        />
        <p>See who's viewed your profile in the last 90 days</p>
        <button>Try for free!</button>
      </div>
    </div>
  );
};

export { Add };
