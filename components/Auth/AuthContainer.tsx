import { useCookies } from 'react-cookie'
import React, { BaseSyntheticEvent, PropsWithChildren, useState } from "react";
import {Input, Button, Row, Col} from "antd";

const AuthContainer = ({children, ...props} : PropsWithChildren) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    
    function handleSubmit() {
        (async () => {
            const password = document.getElementById("password-input") as HTMLInputElement;
            await checkPassword(password.value).then((res) => {
                const success = res.success == 1;
                setLoggedIn(success);
            })
        })();
    }
    
    async function checkPassword(password : string) {
        const response = await fetch("https://yzy-archive-api.replit.app/auth/checkPassword/" + password, {
            "method": "GET"
            })
            .then((res) => res.json())
            .catch(error => console.log(error));
        if(response.status == 1) return {success: 1};
        else return {success: 0};
    }
    
    if(!loggedIn) return (
        <div>
            <Row className='password-container'>
                <Col><Input id="password-input" placeholder="Enter password" onSubmit={handleSubmit}/></Col>
                <Col><Button type="primary" onClick={handleSubmit}>Submit</Button></Col>
            </Row>
        </div>);
    else return (<div>{children}</div>);
}

export default AuthContainer;