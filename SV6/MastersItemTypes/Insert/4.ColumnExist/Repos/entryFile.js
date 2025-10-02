import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumnItemType}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumnItemType});

    return LocalFromDal;
};

export {
    postDefaultFunc
};