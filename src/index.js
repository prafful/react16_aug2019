import React from 'react';
import ReactDOM from 'react-dom';
import FirstComponent from './firstcomponent';
import ReviewComponent from './review/review';

var location =  document.getElementById("container")
ReactDOM.render(
    <span>
        <FirstComponent mytitle="Welcome">Chennai</FirstComponent>
        <FirstComponent mytitle="React 16">Bengaluru</FirstComponent>
        <ReviewComponent titleColor="red" like="15" unlike="10" username="manu" title="Note 10">Gadget is cool</ReviewComponent>
        <ReviewComponent titleColor="green" like="45" unlike="16" username="panu" title="Redmi">Market Blower</ReviewComponent>
        <ReviewComponent titleColor="blue" like="55" unlike="14" username="ganu" title="Nokia">Mobile's GrandPa</ReviewComponent>
        <ReviewComponent titleColor="gold" like="85" unlike="11" username="shanu" title="NoPhone">Future</ReviewComponent>
      </span>          
    , location
   )

