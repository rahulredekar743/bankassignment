import React, {Component, useState} from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import Header from './Header';
import Dropdown from './Dropdown';
import Bankinfo from './Bankinfo';

const options = [
    {
        label: 'Bank of Germany',
        value: 'Gername'
    },
    {
        label: 'Bank of United Kingdom',
        value: 'United Kingdom'
    },
    {
        label: 'Bank of Arab',
        value: 'Arab Emirate'
    },
    {
        label: 'State bank of India',
        value: 'Indian bank'
    }
];


export default () => {
    const [selected, setSelected] = useState(options[0]);
    return (
        <div className={`container`}>
            <BrowserRouter>
                <div>
                    <Header/>
                    <br/><br/>
                    <Dropdown
                        options={options}
                        selected={selected}
                        onSelectedChange={setSelected}
                    />
                    <Bankinfo/>
                </div>
            </BrowserRouter>
        </div>
    )
}