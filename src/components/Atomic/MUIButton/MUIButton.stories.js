import React from 'react';
import { action } from '@storybook/addon-actions';
import MUIButton from './MUIButton';

export default {
    title: 'Components/Atomic/MUIButton',
    component: MUIButton,
    argTypes: {
        variant: {
            options:["contained", "outlined"],
            control: { type: "radio"}
        },
        color: {
            options:["primary", "secondary"],
            control: { type: "radio"}
        }
    }
};


export const Default = ({...args}) => (
    <MUIButton onClick={action('Default onClick={}clicked')} {...args}>
        Default
    </MUIButton>
);