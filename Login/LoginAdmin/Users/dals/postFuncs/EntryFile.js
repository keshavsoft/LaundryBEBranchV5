import { StartFunc as StartFuncPullData } from '../../kLowDb/PullData.js';
import { StartFunc as StartFuncPullDataWithMail } from '../../kLowDb/PushData/WithEmail.js';
import { StartFunc as StartFuncPullDataWithDataPk } from "../../kLowDb/PushData/WithDataPk.js";

let PostFunc = ({ inUsername, inPassword }) => {
    return StartFuncPullData({ inUsername, inPassword });
};

let PostFuncWithMail = ({ inUsername, inPassword, inMail }) => {
    return StartFuncPullDataWithMail({ inUsername, inPassword, inMail });
};

let PostFuncWithDataPk = ({ inUsername, inPassword, inMail, inDataPk }) => {
    return StartFuncPullDataWithDataPk({ inUsername, inPassword, inMail, inDataPk });
}

export { PostFunc, PostFuncWithMail, PostFuncWithDataPk };