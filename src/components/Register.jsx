import { Form, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobno, setMobNo] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("users");
    if (auth) {
      navigate("/login");
    }
  });

  const SubmitEvent = async (e) => {
    if (!firstname || !lastname || !email || !password || !mobno || !address) {
      setError(true);
      return false;
    }
    let result = await fetch("http://localhost:5000/register", {
      method: "POST",
      body: JSON.stringify({ firstname,lastname, email, password,mobno, address }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    // localStorage.setItem("users", JSON.stringify(result));
    navigate("/login");
  };
  return (
    <>
    <h1>Registration Form</h1>
      <div
        className="w-100 text-black"
        style={{ height: "100vh", marginTop: "10vh" }}
      >
        <div className="container mt-4 bg">
          <Form>
            <Form.Group className="mb-3 pt-4">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your First Name"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Form.Control
                type="text"
                placeholder="Enter your Last Name"
                onChange={(e) => setLastName(e.target.value)}
              />
              {error && !firstname && (
                <span className="text-danger"> Enter Your Name</span>
              )}
            </Form.Group>
            <Form.Group className="mb-3 pt-4">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
              {error && !email && (
                <span className="text-danger"> Enter Email address</span>
              )}
            </Form.Group>
            <Form.Group className="mb-3 pt-4">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && !password && (
                <span className="text-danger"> Enter Your Password</span>
              )}
            </Form.Group>
            {/* <Form.Group className="mb-3 pt-4 d-inline-flex ">
              <Form.Label>Gender</Form.Label>
              <Form.Check aria-label="option 1" className="mx-2" name="check"/>
              Male
              <Form.Check aria-label="option 1" className="mx-2" name="check"/>
              Female
              <Form.Check aria-label="option 1" className="mx-2" name="check"/>
              others
              {error && !genderset && (
                <span className="text-danger"> choose correct gender</span>
              )}
              
            </Form.Group> */}
            <Form.Group className="mb-3 pt-4">
              <Form.Label>Mob No</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Mpb no"
                onChange={(e) => setMobNo(e.target.value)}
              />
              {error && !mobno && (
                <span className="text-danger"> Enter Mob No</span>
              )}
            </Form.Group>
            <Form.Group className="mb-3 pt-4">
              <Form.Label>Full Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Full Address"
                onChange={(e) => setAddress(e.target.value)}
              />
              {error && !address && (
                <span className="text-danger"> Enter Full Address</span>
              )}
            </Form.Group>
            <Button variant="primary" onClick={SubmitEvent}>
              Register
            </Button>
          </Form>
        </div>
      </div>

      
    </>
  );
};
export default Register;
