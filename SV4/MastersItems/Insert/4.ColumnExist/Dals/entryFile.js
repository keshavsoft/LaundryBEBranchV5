import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({LocalCoumnCategory,LocalCoumnItemName,LocalCoumnPcs,LocalCoumnWashType,LocalCoumnDryWashRate}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({LocalCoumnCategory,LocalCoumnItemName,LocalCoumnPcs,LocalCoumnWashType,LocalCoumnDryWashRate});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};