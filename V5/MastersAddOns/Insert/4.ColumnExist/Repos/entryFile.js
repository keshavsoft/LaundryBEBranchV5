import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumnAddOnService,LocalCoumnAddOnRate}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumnAddOnService,LocalCoumnAddOnRate});

    return LocalFromDal;
};

export {
    postDefaultFunc
};