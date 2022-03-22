import React from "react";
import {Row, Col} from 'antd';

const items = [
    {
        key : 1,
        icon: <i className="fas fa-chart-pie"></i>,
        title: 'Lorem ipsum dolor sit amet',
        content: 'Lorem ipsum dolor sit amet consectetur adipiscing eli sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
        key : 2,
        icon: <i className="fas fa-desktop"></i>,
        title: 'Lorem ipsum dolor sit amet 2',
        content: 'Lorem ipsum dolor sit amet consectetur adipiscing eli sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
        key : 3,
        icon: <i className="fas fa-database"></i>,
        title: 'Lorem ipsum dolor sit amet 3',
        content: 'Lorem ipsum dolor sit amet consectetur adipiscing eli sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
]

function AppAbout() {
    return (
        <div id="about" className="section AboutUs">  
            <div className="antContainer">
                <div className="title align-center"> 
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div className="align-center">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur 
                    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <Row gutter={[16, 16]}>
                    {items.map(item => {
                         return (
                            <Col  md={{ span: 8 }} key={item.key}>
                                <div className="content">
                                    <div className="icon">{item.icon}</div>
                                    <h3>{item.title}</h3>
                                    <p>{item.content}</p>
                                </div>
                           </Col>
                         );
                     })}
      
                    
                </Row>
            </div>
        </div>           
    )
}

export default AppAbout;