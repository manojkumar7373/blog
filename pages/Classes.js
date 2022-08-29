import React from "react";
import Link from "next/link";
import ReactDom from "react-dom";
function Header() {
  return (
    <div>
      <h1> the first comment</h1>
      <h2> he has good</h2>
    </div>
  );
}
function Sidebar() {
  return (
    <div>
      <h1>this color is blue</h1>
      <h2> blue color background set</h2>
    </div>
  );
}
function Navbar() {
  return (
    <div>
      <h1>customar</h1>
      <h2>loanagainest property</h2>
    </div>
  );
}

function Mywebsite() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Navbar />
    </div>
  );
}
