import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumnGenerateReference,LocalCoumnBookingData,LocalCoumnOrderData,LocalCoumnAddOnArray,LocalCoumnCategory,LocalCoumnItemName,LocalCoumnItemType,LocalCoumnRate,LocalCoumnPcs,LocalCoumnTotal,LocalCoumnlocation,LocalCoumnDeliveryDateTime,LocalCoumnItemService}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumnGenerateReference,LocalCoumnBookingData,LocalCoumnOrderData,LocalCoumnAddOnArray,LocalCoumnCategory,LocalCoumnItemName,LocalCoumnItemType,LocalCoumnRate,LocalCoumnPcs,LocalCoumnTotal,LocalCoumnlocation,LocalCoumnDeliveryDateTime,LocalCoumnItemService});

    return LocalFromDal;
};

export {
    postDefaultFunc
};