import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumnItemService}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumnItemService});

    return LocalFromDal;
};

export {
    postDefaultFunc
};