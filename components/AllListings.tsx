import { useMemo, useState } from 'react';
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
        const response = await fetch("https://yzy-archive-api.replit.app/api/listing/allListings/", {
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
                            <a href={'../listing/' + item.id}>{item.title}</a>
                        </List.Item>
                    );
                }}/>
        </div>
    );
}

export default AllListings;