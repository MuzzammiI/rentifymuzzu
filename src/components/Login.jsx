import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setLoginEmail] = useState("");
  const [password, setLoginPassword] = useState("");
  const [error, setError] = useState(false);
  // const [key, setKey] = useState(null);

  // const sessionAuth = localStorage.getItem("userset");
  const navigate = useNavigate();

  const LoginHandle = async ({setLoginEmail,setLoginPassword}) => {

    let UserFindData = await fetch("http://localhost:5000/user");
    const data = await UserFindData.json();
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      const findEmail = element.email;
      const findPassword = element.password;
    //   console.log(element);
  
      if (email === findEmail && password === findPassword) {
        // console.log("Matched credential");
        localStorage.setItem("user", JSON.stringify({ email, password }));
        navigate("/");
      } else if (email === "" && password === "") {
        setError(true);
        console.log("No Matched");
        return false;
      }
      

    }



    // let LoginData = await fetch(
    //   `http://localhost:5000/login/${"6606cf08f81aeac8e37b1d77"}`
    // );
    // let result = await LoginData.json();
    // const findEmail = result.email;
    // const findPassword = result.password;

    // if (email === findEmail && password === findPassword) {
    //   console.log("Matched credential");
    //   navigate("/showbook");
    //   localStorage.setItem("user", JSON.stringify({ email, password }));
    // } else if (email === "" && password === "") {
    //   setError(true);
    //   console.log("No Matched");
    //   return false;
    // } else {
    //   navigate("/register");
    // }

    //Get data form the localstorage
    // const auth = localStorage.getItem("users");
    // let result = JSON.parse(auth);
    // const username = result.name;
    // const password = result.password;
    // if (loginemail === username && loginpassword === password) {
    //   console.log("succes");
    // } else {
    //   console.log("failed");
    // }
  };

  return (
    <>
      <div className="w-100 bg-dark text-white" style={{ height: "90vh" }}>
        <div className="container">
          {error ? (
            <Alert  variant="danger">Please Enter the Valid Credential.</Alert>
          ) : null}
          <Form>
            <Form.Group
              className="mb-3 pt-4"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={(e) => setLoginEmail(e.target.value)}
              />
              {error && !email && (
                <span className="text-danger"> Enter Email address</span>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                onChange={(e) => setLoginPassword(e.target.value)}
              />
              {error && !password && (
                <span className="text-danger"> Enter Your Password</span>
              )}
            </Form.Group>
            <Button variant="primary" onClick={LoginHandle}>
              Login
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};
export default Login;
