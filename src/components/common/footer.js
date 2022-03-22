import React from "react";
import { Menu, Row, Col , BackTop} from 'antd';

function AppFooter() {
    return (
        <footer>
            <div className="antContainer"> 
                <Row gutter={[16, 16]}>
                    <Col md={{ span: 8 }} xs={{ span: 24 }}>  
                    <h6 className="logo"><i className="fas fa-bolt"></i><a href="/">Ant Starter Template</a></h6> 
                    <p>We have built a strong network enabling us to maintain successful relationships and ensuring a high level of service</p>
                    </Col>
                    <Col  md={{ span: 8 }} xs={{ span: 24 }}>
                    <h6>Contact</h6>
                    <p>E: info@test.co.uk<br />
                    P: 020 1234 5678 </p>
                    </Col>
                    <Col  md={{ span: 8 }} xs={{ span: 24 }}>
                    <h6>Connect</h6>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    </Col>
                </Row>
               
            </div>
            <div className="copyright align-center">Copyright &copy; 2021 - 2022. All Rights Reserved</div>
            <BackTop />
        </footer>

         
    );
}

export default AppFooter;