import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

const ShowProperty = () => {
    const [showproperty, setShowProperty] = useState([]);

useEffect(()=>{
    GetAlldata();

},[])
    
      
  //*** Get Data from Database****** */
   const GetAlldata = async () => {
    let data = await fetch("http://localhost:5000/showproperty");
    data = await data.json();
    setShowProperty(data);

    return data;
  };



  return (
    <>

    <div className="showdata-box">
    {
    showproperty.map((item,index)=>(
        <div className="property-box" key={index}>
    <div className="card" style={{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="Not Uploaded img"/>
  <div className="card-body">
    <h5 className="card-title fw-semibold">{item.propertyName}</h5>
    <p className="card-text fw-light">{item.propertyPlace}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item fst-italic" >No of Bedrooms -- {item.bedroom} </li>
    <li className="list-group-item fst-italic">No of Bathrooms --{item.bathroom} </li>
    <li className="list-group-item fst-italic">No of hospitals --{item.hospital} </li>
    <li className="list-group-item fst-italic">No of college --{item.college} </li>

  </ul>
  <div className="card-body">
    <Link to='/'>Buy</Link>
  </div>
</div>
    </div>
    ))
}   
    </div>

    
    
    </>
    
  )
}
export default ShowProperty