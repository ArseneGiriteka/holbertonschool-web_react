/// <reference path="./crud.d.ts" />

import {RowID, RowElement} from './interface';
import * as CRUD from './crud';

const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Silva"
}

const newRowID: RowID = CRUD.insertRow(row);

const updateRow: RowElement = {
    firstName: "Guillaume",
    lastName: "Silva",
    age: 23
}

CRUD.updateRow(newRowID, updateRow);
CRUD.deleteRow(newRowID);