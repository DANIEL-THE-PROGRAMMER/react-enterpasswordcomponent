import React from "react";
import img from "../../img/test.jpeg";
const Avatar = () => {
  return (
    <section className="section-avatar">
      <img src={img} alt="avatar" />
      <div>
        <p>Business Account</p>
        <b>Sarah Bills</b>
      </div>
    </section>
  );
};

export default Avatar;
