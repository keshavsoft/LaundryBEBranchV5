import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({LocalCoumnMastersCustomers,LocalCoumnMobile,LocalCoumnDOB,LocalCoumnGSTNumber,LocalCoumnCity,LocalCoumnOccupation,LocalCoumnCompanyName,LocalCoumnBranchName}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({LocalCoumnMastersCustomers,LocalCoumnMobile,LocalCoumnDOB,LocalCoumnGSTNumber,LocalCoumnCity,LocalCoumnOccupation,LocalCoumnCompanyName,LocalCoumnBranchName});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};