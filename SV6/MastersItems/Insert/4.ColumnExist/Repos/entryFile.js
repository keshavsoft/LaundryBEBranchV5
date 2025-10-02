import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumnCategory,LocalCoumnItemName,LocalCoumnPcs,LocalCoumnWashType,LocalCoumnDryWashRate}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumnCategory,LocalCoumnItemName,LocalCoumnPcs,LocalCoumnWashType,LocalCoumnDryWashRate});

    return LocalFromDal;
};

export {
    postDefaultFunc
};