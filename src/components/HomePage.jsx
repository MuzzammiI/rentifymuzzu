import Navbar from '../components/Navbar'
import ShowProperty from './ShowProperty';

const HomePage = () => {
  const auth = localStorage.getItem("user");
  return (
    <>
    <Navbar/>
    {
     auth ? 
     (
      <ShowProperty/>
     ) 
     :
     null
    }
    </>
    
  )
}
export default HomePage;