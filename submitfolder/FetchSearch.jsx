import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

//----------to fetch image from api----------
function FetchSearchImages({ name }) {
  const [photo, setMyPhoto] = useState([]);

  async function add() {
    axios

      .get(`https://api.slingacademy.com/v1/sample-data/users?search=${name}`)
      .then((response) => {
        console.log(response.data.users);
        setMyPhoto(response.data.users);
      });
  }

  //--------to load image on first load------------
  useEffect(() => {
    add();
  }, []);

  function userName(login) {
    axios.get(`https://api.github.com/users${login}`).then((response) => {
      const name = response.data.name;
      return name;
    });
  }

  return (
    <>
      {/*------------ image cards -----------------------   */}
      <div className="container">
        <search />
        <div className="row">
          {photo.map((value, index) => {
            return (
              <div className="col-4">
              
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={value.profile_picture}
                    key={value}
                    className="card-img-top"
                    alt="photo"
                  />

                  <p>
                    &nbsp;&nbsp;{value.first_name} {value.last_name}
                  </p>
                </div>
          
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default FetchSearchImages;
