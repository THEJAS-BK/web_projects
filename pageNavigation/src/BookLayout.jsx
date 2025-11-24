import { Link, Outlet } from "react-router-dom";

export default function BookLayout(){
    return(
        <>
            <Link path="/Books/1">Book 1</Link>
            <br />
            <Link path="/Book/2">Book 2</Link>
            <br />
            <Link path="/Book/3">Book 3</Link>
            <Outlet/>
        </>
    )
}