import React, { useState } from "react";
import { Menu, Drawer, Button} from 'antd';
import { Anchor } from 'antd';
 
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

function AppHeader() {

  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

    return (
        <div className="container antContainer"> 
            <div className="logo">
                <i className="fas fa-bolt"></i>
                <a href="/">Ant Starter Template</a>
            </div>
           
            <Menu mode="horizontal" defaultSelectedKeys={['2']}> 
                <Menu.Item key="Home"><Link to="/">Home</Link></Menu.Item>
                <Menu.Item key="About Us"><a href="#about">About</a></Menu.Item>
                <Menu.Item key="Jobs"><a href="#features">Features</a></Menu.Item>
                <Menu.Item key="Registration"><a href="#works">How it works</a></Menu.Item>
                <Menu.Item key="Faq"><a href="#faq">FAQ</a></Menu.Item>
                <Menu.Item key="Plans"><a href="#plans">Plans</a></Menu.Item>
                <Menu.Item key="Contact"><a href="#contact">Contact</a></Menu.Item>
            </Menu>
   
            <div className="showonmobile">
            <Button type="primary" onClick={showDrawer}>
                <i className="fas fa-bars"></i>
            </Button>
            <Drawer title="Main Menu" placement="right" onClose={onClose} visible={visible}>
            <Menu mode="vertical" defaultSelectedKeys={['2']}> 
                <Menu.Item key="Home"><Link to="/">Home</Link></Menu.Item>
                <Menu.Item key="About Us"><a href="#about">About</a></Menu.Item>
                <Menu.Item key="Jobs"><a href="#features">Features</a></Menu.Item>
                <Menu.Item key="Registration"><a href="#works">How it works</a></Menu.Item>
                <Menu.Item key="Faq"><a href="#faq">FAQ</a></Menu.Item>
                <Menu.Item key="Plans"><a href="#plans">Plans</a></Menu.Item>
                <Menu.Item key="Contact"><a href="#contact">Contact</a></Menu.Item>
            </Menu>
                
            </Drawer>
            </div>
        </div>
    );
}

export default AppHeader;