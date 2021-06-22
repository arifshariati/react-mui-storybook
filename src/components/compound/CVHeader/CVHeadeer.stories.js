import React from 'react';
import CVHeader from './CVHeader';

// dummy data - normally data from state or redux
const data ={
    name:"Arif Shariati",
    position:"Senior Full Stack Developer",
    image:"/images/image1.jpg",
    phone:"+905387476806",
    email:"mohammad.arif.fast@hotmail.com",
    address:"1894 Yesilkent Mah"
};

export default {
    title: 'Components/Compound/CVHeader',
    component: CVHeader,
    argTypes: {
        data: {
            control: { type: ""}
        },
    }
};

export const Default = ({...args}) => (
    <CVHeader data={data} makeDense  {...args} />
);