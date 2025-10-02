import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({LocalCoumnItemType}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({LocalCoumnItemType});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};