import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumnItemsInOrder,LocalCoumnCustomerData,LocalCoumnOrderData,LocalCoumnAddOnData,LocalCoumnCheckOutData}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumnItemsInOrder,LocalCoumnCustomerData,LocalCoumnOrderData,LocalCoumnAddOnData,LocalCoumnCheckOutData});

    return LocalFromDal;
};

export {
    postDefaultFunc
};