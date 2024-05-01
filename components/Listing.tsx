import { useMemo, useState } from 'react';
import { useParams } from "react-router-dom";

const Listing = () => {
    const [data, setData] = useState({
        id:0,
        title: "",
        description: "",
        price: 0,
        size: ""
    });
    
    let { listingId } = useParams();

    async function getListing() {
        const response = await fetch("https://yzy-archive-api.replit.app/api/listing/listing/" + listingId, {
            "method": "GET"
            })
            .then((res) => res.json())
            .catch((error) => {
                console.log(error);
                return {
                    id: 0,
                    title: "Error",
                    description: "Error",
                    price: 0,
                    size: "Error"
                };
            });
        return {
            id: response.id,
            title: response.title,
            description: response.description,
            price: response.price,
            size: response.size
        };
    }
    
    useMemo(() => {
        (async () => {
            const listing = await getListing();
            setData(listing);
        })();
    }, [listingId]);

    return (
        <div>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <p>Price: ${data.price}</p>
            <p>Size: {data.size}</p>
            <a href={"https://grailed.com/listings/" + data.id}>Link to Listing</a>
        </div>
    );
}

export default Listing;