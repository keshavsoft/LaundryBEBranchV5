import {
    PostFunc as PostFuncRepo,
    PostFuncWithDataPk as PostFuncRepoWithDataPk
} from '../../repos/postFuncs/EntryFile.js';

let PostFunc = async (req, res) => {
    let LocalData = req.body;

    let LocalUsername = LocalData.UserName;
    let LocalPassword = LocalData.Password;

    let LocalFromRepo = await PostFuncRepo({ inUsername: LocalUsername, inPassword: LocalPassword });

    if (LocalFromRepo.KTF === false) res.status(401).json(LocalFromRepo);

    res.json(LocalFromRepo.JsonData);

};

let PostFuncWithDataPk = async (req, res) => {
    let LocalData = req.body;

    let LocalUsername = LocalData.UserName;
    let LocalPassword = LocalData.Password;
    let LocalMail = LocalData.Mail
    let LocalDataPk = LocalData.DataPk

    let LocalFromRepo = await PostFuncRepoWithDataPk({ inUsername: LocalUsername, inPassword: LocalPassword, inMail: LocalMail, inDataPk: LocalDataPk });

    if (LocalFromRepo.KTF === false) res.status(401).json(LocalFromRepo);

    res.json(LocalFromRepo);
}

export { PostFunc, PostFuncWithDataPk };