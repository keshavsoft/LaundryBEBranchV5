import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumnItemCategory}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumnItemCategory});

    return LocalFromDal;
};

export {
    postDefaultFunc
};