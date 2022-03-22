import React from "react";
import { Carousel } from 'antd';
import { Button, Radio } from 'antd';

//  Declare sliders

const slides = [
    {
        key : 1,
        title: 'Lorem ipsum dolor sit amet',
        content: 'Lorem ipsum dolor sit amet consectetur adipiscing eli sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
        key : 2,
        title: 'Lorem ipsum dolor sit amet 2',
        content: 'Lorem ipsum dolor sit amet consectetur adipiscing eli sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
        key : 3,
        title: 'Lorem ipsum dolor sit amet 3',
        content: 'Lorem ipsum dolor sit amet consectetur adipiscing eli sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
] 
function AppVideo() {
    return (
        <div class="carousel">
                <Carousel autoplay>
                     {slides.map(item => {
                         return (
                        <div class="antContainer block">
                            <div className="content">
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                                <div className="btn-carousel">
                                <Button type="primary" shape="round" size="large">Learn more</Button>
                                <Button size="large" shape="round"><i class="fas fa-desktop"></i>View video</Button>
                                </div>
                            </div>
                        </div>
                         );
                     })}
                </Carousel>
        </div>
    )
}

export default AppVideo;