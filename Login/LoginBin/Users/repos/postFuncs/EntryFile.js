import {
    PostFunc as PostFuncDal,
    PostFuncWithDataPk as PostFuncDalWithDataPk,
    PostAsIsFunc as PostAsIsFuncDal
} from '../../dals/postFuncs/EntryFile.js';

let PostFunc = ({ inUsername, inPassword }) => {
    return PostFuncDal({ inUsername, inPassword });
};

let PostAsIsFunc = ({ inInsertData }) => {
    return PostAsIsFuncDal({ inInsertData });
};

let PostFuncWithDataPk = ({ inUsername, inPassword, inMail, inDataPk }) => {
    return PostFuncDalWithDataPk({ inUsername, inPassword, inMail, inDataPk });
}

export { PostFunc, PostFuncWithDataPk, PostAsIsFunc };