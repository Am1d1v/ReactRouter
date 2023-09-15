import { Link } from "react-router-dom";

const Home = () => {

    return(
        <>
        <h1>Home</h1>
        <Link to='/About'>About</Link>
        <br />
        <Link to='/Contacts'>Contacts</Link>
        </>
    )
}

export default Home;