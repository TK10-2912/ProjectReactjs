import React from 'react';
import { Image, Menu, Row } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

function SideMenu() {
    const navigate = useNavigate();
    const getItem = (label, key, icon, children, type) => {
        return {
            label,
            key,
            icon,
            children,
            type,
        };
    }
    const items = [
        getItem('Home', '/', <MailOutlined />),
        getItem('Store', '/Store', <AppstoreOutlined />, [
            getItem('Store1', '/Store1'),
            getItem('Store2', '/Store2'),
            getItem('Store3', '/Store3')
        ]),
        getItem('Setting', '/Setting', <SettingOutlined />, [
            getItem('Setting1', '/Setting1'),
            getItem('Setting2', '/Setting2'),
            getItem('Setting3', '/Setting3'),
            getItem('Setting4', '/Setting4'),

        ]),
    ];
    return (
        <Row style = {{ backgroundColor: "#001529"}}>
            <Image src={process.env.PUBLIC_URL+'logoApp.jpg'}></Image>
            <Menu
                theme='dark'
                onClick={({ key }) => {
                    navigate(key);
                }}
                style={{
                    width: "100%",
                    height: '100vh'
                }}
                mode="inline"
                items={items}
            />
        </Row >
    );
}

export default SideMenu;