import React, { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";

const Socket = () => {
  const [driver, setDriver] = useState();
  const socket = useMemo(
    () =>
      io("http://localhost:1338", {
        transports: ["websocket"],
      }),
    []
  );

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected");
    });
  }, [socket]);

  useEffect(() => {
    if (socket) {
      socket.on("driversList", (drivers) => {
        console.log(drivers);
      });
    }
  }, [socket]);

  function addDriver() {
    const rider = {
      location: {
        type: "Point",
        coordinates: [3.34204, 9.45627],
      },
      photo: "https://good-deed-app.s3-us-west-1.amazonaws.com/user.png",
      isVerified: false,
      blocked: false,
      isOnline: true,
      _id: "63c5e863f3fc19fb84d0afd6",
      firstName: "ben",
      middleName: "ben",
      lastName: "onuorah",
      email: "deviyke@gmail.com",
      phone: "080311427690",
      password: "$2b$10$Z5NNloZOiouEDHZzn15TwOU71C3vD/GvVrTrMD0Fp.6JTzAE53PEO",
      country: "nigeria",
      state: "lagos",
      address: "no 3 canal estate okota lagos",
      riderType: "freelance",
      businessRef: "-WrMzntZJ",
      code: null,
      documents: [],
      createdAt: "2023-01-17T00:14:27.322Z",
      updatedAt: "2023-01-17T00:35:34.863Z",
    };
    socket.emit("location:update", rider);
  }
  function getDriver() {
    socket.emit("getDrivers");
  }
  return (
    <div>
      <h1>Socket</h1>
      <button className='btn btn-primary btn-lg me-2' onClick={addDriver}>
        add
      </button>
      <button className='btn btn-secondary btn-lg' onClick={getDriver}>
        get
      </button>
    </div>
  );
};

export default Socket;
