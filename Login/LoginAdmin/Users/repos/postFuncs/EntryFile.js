import {
    PostFunc as PostFuncDal,
    PostFuncWithDataPk as PostFuncDalWithDataPk
} from '../../dals/postFuncs/EntryFile.js';

let PostFunc = ({ inUsername, inPassword }) => {
    return PostFuncDal({ inUsername, inPassword });
};

let PostFuncWithDataPk = ({ inUsername, inPassword, inMail, inDataPk }) => {
    return PostFuncDalWithDataPk({ inUsername, inPassword, inMail, inDataPk });
}

export { PostFunc, PostFuncWithDataPk };