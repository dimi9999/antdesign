import React from "react";
import { Collapse } from 'antd';
import { Button } from 'antd';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const text = `
  A dog and a cat is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
 
function AppFaq() {
    return (
        <div id="faq" className="section Faq">  
            <div className="antContainer">
                <div className="title align-center"> 
                    <h2>Frequently asked Questions</h2>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <Collapse defaultActiveKey={['1']} onChange={callback}>
                    <Panel header="Why choose us" key="1">
                    <p>{text}</p>
                    </Panel>
                    <Panel header="How Can I learn react" key="2">
                    <p>{text}</p>
                    </Panel>
                    <Panel header="How can I learn Javascript" key="3">
                    <p>{text}</p>
                    </Panel>
                    <Panel header="Why should I learn React" key="4">
                    <p>{text}</p>
                    </Panel>
                    <Panel header="Is it easy to learn and use?" key="5">
                    <p>{text}</p>
                    </Panel>
                    <Panel header="Are there any courses out there?" key="6">
                    <p>{text}</p>
                    </Panel>
                </Collapse>
                <div className="quickSupport align-center">
                    <h3>Any questions?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <Button type="primary" size="large" shape="round"><i className="fas fa-envelope"></i>View video</Button>
                 </div>
            </div>
        </div>           
    )
}

export default AppFaq;