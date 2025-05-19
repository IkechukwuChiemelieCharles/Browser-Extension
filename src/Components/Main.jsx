import React, { useEffect, useState } from "react";

const Main = () => {
  const [data, setdata] = useState([]);

  useEffect(function () {
    async function fetchData() {
      try {
        const res = await fetch("/data.json");

        if (!res.ok) {
          throw new Error("Error");
        }

        const data = await res.json();

        // console.log(data);

        setdata(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, []);

  // console.log(data);

  return (
    <main>
      <div className="top">
        <h1>Extension List</h1>

        <div className="btns">
          <div className="btn1">All</div>
          <div className="btn1">Active</div>
          <div className="btn1">Inactive</div>
        </div>
      </div>

      <div className="boxes">
        {data.map((i) => (
          <div className="box" key={i.name}>
            <div className="boxLogo">
              <img src={i.logo} alt="" />
              <div className="intro">
                <h2 className="name">{i.name}</h2>
                <p className="text">{i.description}</p>
              </div>
            </div>

            <Bottom key={i.name} />
          </div>
        ))}
      </div>
    </main>
  );
};

function Bottom() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="removeXtoggle">
      <button className="removeBTN">Remove</button>
      <div
        className={`bg ${toggle ? "activeToggle" : ""}`}
        onClick={() => {
          setToggle(!toggle);
          console.log("hi");
        }}
      >
        <div className="circle"></div>
      </div>
    </div>
  );
}

export default Main;
