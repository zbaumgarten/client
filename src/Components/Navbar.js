import { Link } from 'react-router-dom'


export default function Navbar() {
    return(
        <div>
            <Link to='/'>Home</Link>
            <Link to='/new'>New</Link>
        </div>
    )
}