import { StartFunc as StartFuncCheckCookie } from "./CheckCookie.js";
import { StartFunc as StartFuncSetFocus } from "./SetFocus.js";
import { StartFunc as StartFuncAddListeners } from "./AddListeners/EntryFile.js";
import { StartFunc as ShowOnDom } from "./ShowOnDom/EntryFile.js";

const StartFunc = ({ inSuccessFunc }) => {
    let localCheckCookie = StartFuncCheckCookie();

    if (localCheckCookie === true) {
        ShowOnDom();

        return true;
    } else {
        StartFuncSetFocus();
    };

    StartFuncAddListeners({ inSuccessFunc });
};

export { StartFunc };