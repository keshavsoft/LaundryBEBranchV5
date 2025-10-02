import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({LocalCoumnAddOnService,LocalCoumnAddOnRate}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({LocalCoumnAddOnService,LocalCoumnAddOnRate});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};