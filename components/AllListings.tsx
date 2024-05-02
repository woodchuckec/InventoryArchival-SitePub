import { useMemo, useState } from 'react';
import {List, Col, Row, Input} from "antd";

const AllListings = () => {
    const [data, setData] = useState([{
        id:0,
        title: "",
        description: "",
        price: 0,
        size: "",
        url: ""
    }]);

    const [displayData, setDisplayData] = useState([{
        id:0,
        title: "",
        description: "",
        price: 0,
        size: "",
        url: ""
    }]);

    async function getListing() {
        const response = await fetch("https://yzy-archive-api.replit.app/api/listing/allListingsWithThumbnails/", {
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
                    size: "Error",
                    url: "Error"
                };
            });
        return response;
    }

    function handleSearchChange(value) {
        const searched = data.filter(item => item.title.toLowerCase().includes(value.target.value.toLowerCase()));
        setDisplayData(searched);
    }
    
    useMemo(() => {
        (async () => {
            const listing = await getListing();
            setData(listing);
            setDisplayData(data);
        })();
    }, []);
    
    return (
        <div>
            <Input placeholder='Search' onChange={handleSearchChange}/>
            <List dataSource={displayData}
                renderItem={(item) => {
                    return (
                        <List.Item>
                            <a href={'../listing/' + item.id} target="_blank">
                                <Row>
                                  <Col span={12}><img src={item.url} style={{width:"50%", height:"auto"}}/></Col>
                                  <Col span={12}>{item.title}</Col>
                                </Row>
                            </a>
                        </List.Item>
                    );
                }}/>
        </div>
    );
}

export default AllListings;