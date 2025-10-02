import { StartFunc as StartFuncPullData } from '../../kLowDb/PullData.js';
import { StartFunc as StartFuncPullDataWithDataPk } from "../../kLowDb/PushData/WithDataPk.js";
import { StartFunc as AsIs } from '../../kLowDb/AsIs.js';

let PostFunc = ({ inUsername, inPassword }) => {
    return StartFuncPullData({ inUsername, inPassword });
};

let PostAsIsFunc = ({ inInsertData }) => {
    return AsIs({ inInsertData });
};

let PostFuncWithDataPk = ({ inUsername, inPassword, inMail, inDataPk }) => {
    return StartFuncPullDataWithDataPk({ inUsername, inPassword, inMail, inDataPk });
}

export { PostFunc, PostFuncWithDataPk, PostAsIsFunc };