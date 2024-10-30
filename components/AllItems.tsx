import { useMemo, useState, BaseSyntheticEvent } from 'react';
import {List, Col, Row, Input} from "antd";

const AllItems = () => {
    const [data, setData] = useState([{
        id:0,
        chaseId:"",
        name: "",
        description: "",
        size: "",
        box: "",
    }]);

    const [displayData, setDisplayData] = useState([{
        id:0,
        chaseId:"",
        name: "",
        description: "",
        size: "",
        box: "",
    }]);

    async function getListing() {
        const response = await fetch("https://inventory-archival-api-woodchuckec.replit.app/api/item/allItems", {
            "method": "GET"
            })
            .then((res) => res.json())
            .catch((error) => {
                console.log(error);
                return {
                    id:0,
                        chaseId:"",
                        name: "",
                        description: "",
                        size: "",
                        box: "",
                };
            });
        return response;
    }

    const handleSearchChange = (event : BaseSyntheticEvent) => {
        const searched = data.filter(item => item.name.toLowerCase().includes(event.target.value.toLowerCase()));
        setDisplayData(searched);
    }
    
    useMemo(() => {
        (async () => {
            const listing = await getListing().catch(err => {
                setData([]);
                setDisplayData([]);
            });
            setData(listing);
            setDisplayData(listing);
        })();
    }, []);

    //<Col span={12}><img src={item.url} style={{width:"50%", height:"auto"}}/></Col>
    
    return (
        <div>
            <Input placeholder='Search' onChange={handleSearchChange}/>
            <List dataSource={displayData}
                renderItem={(item) => {
                    return (
                        <List.Item>
                            <a href={'../item/' + item.id} target="_blank">
                                <Row>
                                  <Col span={12}>{item.chaseId}</Col>
                                </Row>
                            </a>
                        </List.Item>
                    );
                }}/>
        </div>
    );
}

export default AllItems;