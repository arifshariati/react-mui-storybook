import React from 'react';
import CustomAvatar from './CustomAvatar';

const src = "/images/image1.jpg";

export default {
    title: 'Components/Atomic/CustomAvatar',
    component: CustomAvatar,
    argTypes: {
        src: {
            control: { type: ""}
        },
        size: {
            options:[4, 8, 12],
            control: { type: "radio"}
        },
    }
};

export const Default = ({...args}) => (
    <CustomAvatar src={src}  {...args} />
);

export const Square = () => (
    <CustomAvatar src={src} />
);

export const Rounded = () => (
    <CustomAvatar src={src} rounded />
);

export const Small = () => (
    <CustomAvatar src={src} rounded size={4} />
);

export const Medium = () => (
    <CustomAvatar src={src} rounded size={8} />
);

export const Large = () => (
    <CustomAvatar src={src} rounded size={12} />
);