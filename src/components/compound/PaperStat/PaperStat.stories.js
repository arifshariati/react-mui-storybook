import React from 'react';
import PaperStat from './PaperStat';

// dummy data - normally data from state or redux
const data ={
    title:"Users",
    value:"100"
};

export default {
    title: 'Components/Compound/PaperStat',
    component: PaperStat,
    argTypes: {
        data: {
            control: { type: ""}
        },
    }
};

export const Default = ({...args}) => (
    <PaperStat data={data}  {...args} />
);