import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = (req, res) => {
    let LocalRequestBody = req.body;
	let LocalCoumnItemService = LocalRequestBody.ItemService;
	let LocalCoumnDeliveryDateTime = LocalRequestBody.DeliveryDateTime;
	let LocalCoumnlocation = LocalRequestBody.location;
	let LocalCoumnTotal = LocalRequestBody.Total;
	let LocalCoumnPcs = LocalRequestBody.Pcs;
	let LocalCoumnRate = LocalRequestBody.Rate;
	let LocalCoumnItemType = LocalRequestBody.ItemType;
	let LocalCoumnItemName = LocalRequestBody.ItemName;
	let LocalCoumnCategory = LocalRequestBody.Category;
	let LocalCoumnAddOnArray = LocalRequestBody.AddOnArray;
	let LocalCoumnOrderData = LocalRequestBody.OrderData;
	let LocalCoumnBookingData = LocalRequestBody.BookingData;
	let LocalCoumnGenerateReference = LocalRequestBody.GenerateReference;

    let LocalFromRepo = postDefaultFuncFromRepo({LocalCoumnGenerateReference,LocalCoumnBookingData,LocalCoumnOrderData,LocalCoumnAddOnArray,LocalCoumnCategory,LocalCoumnItemName,LocalCoumnItemType,LocalCoumnRate,LocalCoumnPcs,LocalCoumnTotal,LocalCoumnlocation,LocalCoumnDeliveryDateTime,LocalCoumnItemService});

    if (LocalFromRepo.KTF === false) {
        res.status(409).send(LocalFromRepo.KReason);
        return;
    };

    res.set('Content-Type', 'text/plain');
    res.send(LocalFromRepo.SuccessText);
};

export {
    postFilterDataFromBodyFunc
};