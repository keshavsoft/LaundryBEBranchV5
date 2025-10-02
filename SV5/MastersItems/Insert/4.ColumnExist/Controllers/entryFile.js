import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = (req, res) => {
    let LocalRequestBody = req.body;
	let LocalCoumnDryWashRate = LocalRequestBody.DryWashRate;
	let LocalCoumnWashType = LocalRequestBody.WashType;
	let LocalCoumnPcs = LocalRequestBody.Pcs;
	let LocalCoumnItemName = LocalRequestBody.ItemName;
	let LocalCoumnCategory = LocalRequestBody.Category;

    let LocalFromRepo = postDefaultFuncFromRepo({LocalCoumnCategory,LocalCoumnItemName,LocalCoumnPcs,LocalCoumnWashType,LocalCoumnDryWashRate});

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