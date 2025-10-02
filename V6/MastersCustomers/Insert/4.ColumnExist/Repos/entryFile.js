import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumnMastersCustomers,LocalCoumnMobile,LocalCoumnDOB,LocalCoumnGSTNumber,LocalCoumnCity,LocalCoumnOccupation,LocalCoumnCompanyName,LocalCoumnBranchName}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumnMastersCustomers,LocalCoumnMobile,LocalCoumnDOB,LocalCoumnGSTNumber,LocalCoumnCity,LocalCoumnOccupation,LocalCoumnCompanyName,LocalCoumnBranchName});

    return LocalFromDal;
};

export {
    postDefaultFunc
};