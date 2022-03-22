import React from "react";
import {Row, Col} from 'antd';
import { Card } from 'antd';

import image1 from '../../img/about-img1.jpg';
import image2 from '../../img/about-img2.jpg';
import image3 from '../../img/about-img3.jpg';
import image4 from '../../img/about-img4.jpg';
import image5 from '../../img/about-img5.jpg';
import image6 from '../../img/about-img6.jpg';

const { Meta } = Card; 

function AppFeatures() {
    return (
        <div id="features" className="section Features">  
            <div className="antContainer">
                <div className="title align-center"> 
                    <h2>Main features</h2>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <Row gutter={[16, 16]}>   
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                        <Card hoverable cover={<img alt="example" src={image1} />}>
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                        <Card hoverable cover={<img alt="example"  src={image2} />}>
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                        <Card hoverable cover={<img alt="example"  src={image3} />}>
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col> 
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                        <Card hoverable cover={<img alt="example"  src={image4} />}>
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                        <Card hoverable cover={<img alt="example"  src={image5} />}>
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                        <Card hoverable cover={<img alt="example"  src={image6} />}>
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
      
                    
                </Row>
            </div>
        </div>           
    )
}

export default AppFeatures;