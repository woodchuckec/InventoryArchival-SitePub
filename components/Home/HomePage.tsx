import {useEffect} from "react";
import AllItems from "../AllItems";

const HomePage = () => {
    
    const x = async () => {
        var res = await fetch("https://0a1d4ffd-e47f-42d9-bae2-330f2c969a7d-00-1697762miybvk.janeway.replit.dev/api/item/allItems", {
               "method": "GET",
            "credentials": "omit"
           });
            console.log(res);
    }
    useEffect(() => {
        (async () => {
            var res = await fetch("https://inventory-archival-api-woodchuckec.replit.app/api/item/allItems", {
               "method": "GET"
            });
            console.log(res);
        });
    })
    
    return (
        <div>
            <p>Hello</p>
            <button onClick={x}>Test</button>
        </div>
    );
} 

export default HomePage;