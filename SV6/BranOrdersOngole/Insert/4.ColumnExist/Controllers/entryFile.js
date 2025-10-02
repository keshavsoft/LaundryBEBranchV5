import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = (req, res) => {
    let LocalRequestBody = req.body;
	let LocalCoumnCheckOutData = LocalRequestBody.CheckOutData;
	let LocalCoumnAddOnData = LocalRequestBody.AddOnData;
	let LocalCoumnOrderData = LocalRequestBody.OrderData;
	let LocalCoumnCustomerData = LocalRequestBody.CustomerData;
	let LocalCoumnItemsInOrder = LocalRequestBody.ItemsInOrder;

    let LocalFromRepo = postDefaultFuncFromRepo({LocalCoumnItemsInOrder,LocalCoumnCustomerData,LocalCoumnOrderData,LocalCoumnAddOnData,LocalCoumnCheckOutData});

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