import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import {Alert} from 'react-bootstrap'

const AddPost = () => {
    const [propertyName,setpropertyName] = useState("");
  const [propertyPlace, setPropertyPlace] = useState("");
  const [propertyArea, setPropertyArea] = useState("");
  const [bedroom, setBedRoom] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [hospital, setHostpital] = useState("");
  const [college, setCollege] = useState("");


  //Error check input field empty or not
  const [error,setError] = useState(false);
  const navigate = useNavigate();
  

  //Adding property details
  const addProperty = async() => {
    if(propertyName && propertyPlace && propertyArea && bedroom && bathroom && hospital && college){
        SendProperty();
      navigate("/showproperty");
       console.log("property added")
    }
    else{
      // console.log("please fill full");
      setError(true);
      return false;
    }
  };

  const SendProperty= async()=>{
    let result = await fetch("http://localhost:5000/addproperty", {
      method: "POST",
      body: JSON.stringify({propertyName, propertyPlace, propertyArea, bedroom, bathroom,hospital,college }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
  }

  




//HTML part of Property details
  return (
    <>
      <div className="addpost ">

        <h1>Add Property Details</h1>
        <label htmlFor="item">
          Property Name or Title
          <input
            type="text"
            placeholder="Enter Property Name"
            onChange={(e) => setpropertyName(e.target.value)}
          />
        {error && !propertyName ?<span style={{color:"red",marginTop:"5px"}}>Enter Place Title</span>:null}
        </label>
        <label htmlFor="item">
          Place Name
          <input
            type="text"
            placeholder="Enter Place Name"
            onChange={(e) => setPropertyPlace(e.target.value)}
          />
        {error && !propertyPlace ?<span style={{color:"red",marginTop:"5px"}}>Enter Place Name</span>:null}
        </label>
        <label htmlFor="item">
          Place Area 
          <input
            type="text"
            placeholder="Enter Place Area name"
            onChange={(e) => setPropertyArea(e.target.value)}
          />
        {error && !propertyArea ?<span style={{color:"red",marginTop:"5px"}}>Enter Place Area Name</span>:null}
        </label>
        <label htmlFor="item">
          No of Bedrooms 
          <input
            type="text"
            placeholder="Enter Book Name"
            onChange={(e) => setBedRoom(e.target.value)}
          />
        {error && !bedroom ?<span style={{color:"red",marginTop:"5px"}}>Enter No of Bedrooms </span>:null}
        </label>
        <label htmlFor="item">
          No of Bathroom
          <input
            type="text"
            placeholder="Enter Book Name"
            onChange={(e) => setBathroom(e.target.value)}
          />
        {error && !bathroom ?<span style={{color:"red",marginTop:"5px"}}>Enter No of bathrooms </span>:null}
        </label>
        
        <label htmlFor="item">
          No of Hospitals Nearby
          <input
            type="text"
            placeholder="Enter Book Name"
            onChange={(e) => setHostpital(e.target.value)}
          />
        {error && !hospital ?<span style={{color:"red",marginTop:"5px"}}>Enter No of Hospitals </span>:null}
        </label>
        <label htmlFor="item">
          No of College Near by
          <input
            type="text"
            placeholder="Enter Book Name"
            onChange={(e) => setCollege(e.target.value)}
          />
        {error && !college ?<span style={{color:"red",marginTop:"5px"}}>Enter No of College </span>:null}
        </label>
        
        <div className="btn btn-primary" type="submit" onClick={addProperty}>
          Add Property
        </div>
      </div>
    </>
  );
};
export default AddPost;
