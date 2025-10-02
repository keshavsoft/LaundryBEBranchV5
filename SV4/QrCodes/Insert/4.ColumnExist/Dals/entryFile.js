import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({LocalCoumnGenerateReference,LocalCoumnBookingData,LocalCoumnOrderData,LocalCoumnAddOnArray,LocalCoumnCategory,LocalCoumnItemName,LocalCoumnItemType,LocalCoumnRate,LocalCoumnPcs,LocalCoumnTotal,LocalCoumnlocation,LocalCoumnDeliveryDateTime,LocalCoumnItemService}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({LocalCoumnGenerateReference,LocalCoumnBookingData,LocalCoumnOrderData,LocalCoumnAddOnArray,LocalCoumnCategory,LocalCoumnItemName,LocalCoumnItemType,LocalCoumnRate,LocalCoumnPcs,LocalCoumnTotal,LocalCoumnlocation,LocalCoumnDeliveryDateTime,LocalCoumnItemService});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};