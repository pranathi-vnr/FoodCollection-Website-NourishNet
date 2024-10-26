import React from 'react'
import { useLocation } from 'react-router-dom';
function Receiver() {
    const obj = useLocation();
    const [currentUser, setCurrentUser] = useState(obj.state);
  return (
    <div>

    </div>
  )
}

export default Receiver