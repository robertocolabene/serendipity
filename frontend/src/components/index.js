import React from 'react'
import Carousel from './carousel';
import Banner from './banner';
import Header from './header';
import Footer from './footer';

const Components = {
    Banner, 
    Carousel, 
    Header,
    Footer
};

const getBlock = (block) => {
    if (typeof Components[block.component] !== "undefined") {
        return React.createElement(Components[block.component], {
            key: block._uid
        });
    }
    return React.createElement(
        () => <div>The component {block.component} has not been created yet.</div>,
        { key: block._uid }
    );
};

export { 
    Banner, 
    Carousel, 
    Header,
    Footer,
    getBlock 
} 