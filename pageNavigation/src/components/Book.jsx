import { useParams } from "react-router-dom";

export default function Book(){
        let {id}=useParams();
        return(
            <h1>This is from Home component {id}</h1>
        )
}