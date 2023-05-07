import './Navbar.css'

const Navbar = () => {
    return ( 
    <div className="navbar">
        <h1>Chat AI</h1>
        <div className="nav-right">
            <button>Log In</button>
            <button className='pri-btn'>Sign Up</button>
        </div>
    </div> );
}
 
export default Navbar;