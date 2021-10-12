import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowseScreen } from './browse-screen';

import {
    AuthorKeypair,
    FormatValidatorEs4,
    StorageAsync,
    StorageDriverAsyncMemory
} from 'stone-soup';

//================================================================================
// Earthstar setup

let workspace = '+test.abc';
let authorKeypair: AuthorKeypair = {
    "address": "@demo.bki3qzbx5abimqw7on4y75ib7ybb4nks2vagmyvg2sfzj4dixmrca",
    "secret": "bjcgip74umlnncva443572uyo7hsugm3a72ch2ej7d7o4epjgfa3a"
}
let storage = new StorageAsync(
    workspace,
    FormatValidatorEs4,
    new StorageDriverAsyncMemory(workspace)
);

//================================================================================

ReactDOM.render(
    <React.StrictMode>
        <BrowseScreen />
    </React.StrictMode>,
    document.getElementById('root')
);
