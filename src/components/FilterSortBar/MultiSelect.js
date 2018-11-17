import Select from 'react-select';
import React from 'react';

export default () => (
    <Select
        // defaultValue=''
        isMulti
        name= props.name
        options={props.options}
        className="basic-multi-select"
        classNamePrefix="select"
    />
);