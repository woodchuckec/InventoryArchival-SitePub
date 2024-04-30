import React, { useMemo, useState } from 'react';
import { useParams } from "react-router-dom";
import {List} from "antd";

const AllListings = () => {
    const [data, setData] = useState([{
        id:0,
        title: "",
        description: "",
        price: 0,
        size: ""
    }]);

    async function getListing() {
        const response = await fetch("https://archive-db-api-woodchuckec.replit.app/api/listing/allListings/", {
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
        console.log(response);
        return response;
    }
    
    useMemo(() => {
        (async () => {
            const listing = await getListing();
            setData(listing);
        })();
    }, []);

    return (
        <div>
            <List dataSource={data}
                renderItem={(item) => {
                    return (
                        <List.Item>
                            {item.title}
                            <br></br>
                            Description: {item.description}
                            <br></br>
                            Price: {item.price}$
                            <br></br>
                            Size: {item.size}
                            <br></br>
                            <a href={"https://grailed.com/listing/" + item.id}>Link to Listing</a>
                        </List.Item>
                    );
                }}/>
        </div>
    );
}

export default AllListings;