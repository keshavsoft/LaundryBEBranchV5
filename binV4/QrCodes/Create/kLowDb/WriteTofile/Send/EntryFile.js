import { StartFunc as WithChecking } from "../WithChecking/StartFunc.js";

let StartFunc = async ({ inDataToInsert, inDomainName }) => {
    let LocalFromSave = WithChecking({ inDataToInsert });

    if (LocalFromSave.KTF === false) {
        return await LocalFromSave;
    };

    return await LocalFromSave;
};

export { StartFunc };