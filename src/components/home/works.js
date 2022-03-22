import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const AppWorks = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
    <div id="works" className="section Works">  
            <div className="antContainer">
                <div className="title align-center"> 
                    <h2>How it works</h2>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div className="content align-center">
                    <Button type="primary" shape="round" size="large" onClick={showModal}>
                        Open Modal
                    </Button>
                    <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Modal>
                </div>
            </div>
        </div>           
      
    </>
  );
};

export default AppWorks;