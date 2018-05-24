import 'idempotent-babel-polyfill';
import "fetch-polyfill";
import React from 'react';
import ReactDom from 'react-dom';
import RouteIndex from './router'




const portal=document.getElementById("personalPortal");
const render=function(dom,options){
    ReactDom.render(
        <RouteIndex/>,
        portal
    );
};
render();


window.portal={
    render:render
};