import logo from './logo.svg';
import 'antd/dist/antd.css'
import './App.scss';
import { Layout } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Routes, Route, Link } from "react-router-dom";


// Tip: add scr/components/home/ for your MODULES ON PAGES
// Tip: add src/views/pagename.js for INDIVIDUAL PAGES 
// Import components from cunstions created in them

// Common (Header & Footer)
import AppHeader from './components/common/header';
import AppFooter from './components/common/footer';

// Views (Pages)
import AppHome from './views/home';

// Declare your tags as consts
const { Header, Content, Footer } = Layout;

function App() {
  return (
    
    <Layout>
      <Header className="header">
        <AppHeader></AppHeader>
      </Header> 
      <Content>
          <AppHome />
      </Content>
      <Footer>
        <AppFooter></AppFooter>
      </Footer>
    </Layout>
 
  );
}
 

export default App;
