import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({LocalCoumnItemCategory}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({LocalCoumnItemCategory});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};