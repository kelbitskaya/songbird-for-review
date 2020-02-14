import React from 'react';

const NavigationLink = (props) => {
    const { value, className } = props;

    return (
        <li className={className}><a href="/">{value}</a></li>
    )
};

export default NavigationLink;
