import Dropdown from 'react-bootstrap/Dropdown';
import react from "react"

const ProfileDropDown = (props) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Profile
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">{props.name}</Dropdown.Item>
        <Dropdown.Item href="#/action-2">{props.email}</Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>
  )
}
export default ProfileDropDown