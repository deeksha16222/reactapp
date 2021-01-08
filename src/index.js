import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import Sdata from "./Sdata";
import './index.css';

function ncard(val) {
return (
<Card sname = {val.sname}
imgsrc = {val.imgsrc}
title = {val.title}
link = {val.link}
/>
);   
}

ReactDOM.render(
<>
<h1 className="heading_style"> LIST OF TOP 5 NETFLIX SERIES IN 2020 </h1>
{Sdata.map(ncard)}
</>,
document.getElementById("root")
);

