import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({LocalCoumnItemsInOrder,LocalCoumnCustomerData,LocalCoumnOrderData,LocalCoumnAddOnData,LocalCoumnCheckOutData}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({LocalCoumnItemsInOrder,LocalCoumnCustomerData,LocalCoumnOrderData,LocalCoumnAddOnData,LocalCoumnCheckOutData});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};