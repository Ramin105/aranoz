import React from "react";
import {Link} from 'react-router'
const Notfound = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",flexDirection:'column',
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>Notfound 404</div>
<div> <Link to={'/'}>Geri qayit</Link></div>
    </div>
  );
};

export default Notfound;
