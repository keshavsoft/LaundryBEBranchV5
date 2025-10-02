import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({LocalCoumnItemService}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({LocalCoumnItemService});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};