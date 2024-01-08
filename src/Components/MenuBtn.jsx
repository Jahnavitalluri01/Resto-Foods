import Button from 'react-bootstrap/Button';
import React from "react";
import {Link} from 'react-router-dom';
export function Menubtn(){
    return(
        <div>
        <Link to='/menu'>
            <Button variant="success btn-lg px-4">Full Menu</Button>
        </Link>
        </div>
    )
}
// export default Menubtn;