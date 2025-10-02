import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = (req, res) => {
    let LocalRequestBody = req.body;
	let LocalCoumnBranchName = LocalRequestBody.BranchName;
	let LocalCoumnCompanyName = LocalRequestBody.CompanyName;
	let LocalCoumnOccupation = LocalRequestBody.Occupation;
	let LocalCoumnCity = LocalRequestBody.City;
	let LocalCoumnGSTNumber = LocalRequestBody.GSTNumber;
	let LocalCoumnDOB = LocalRequestBody.DOB;
	let LocalCoumnMobile = LocalRequestBody.Mobile;
	let LocalCoumnMastersCustomers = LocalRequestBody.MastersCustomers;

    let LocalFromRepo = postDefaultFuncFromRepo({LocalCoumnMastersCustomers,LocalCoumnMobile,LocalCoumnDOB,LocalCoumnGSTNumber,LocalCoumnCity,LocalCoumnOccupation,LocalCoumnCompanyName,LocalCoumnBranchName});

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