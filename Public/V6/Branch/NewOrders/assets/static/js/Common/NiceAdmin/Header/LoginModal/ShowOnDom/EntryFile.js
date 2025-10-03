const StartFunc = () => {
    jFLocalUser();
    jFLocalBranchLogOutId();
    jFLocalUserNameId();
};

let jFLocalUser = () => {
    let jVarLocalUserNameId = 'UserName'
    let jVarLocalHtmlId = document.getElementById(jVarLocalUserNameId);
    let jVarLocalUserName = localStorage.getItem("UserName");

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.innerHTML = jVarLocalUserName;
    };
};

let jFLocalBranchLogOutId = () => {
    let jVarLocalBranchId = 'BranchLogOutId';
    let jVarlocalBranch = document.getElementById(jVarLocalBranchId);
    let jVarLocalBranchName = localStorage.getItem("BranchName");
    const modifiedString = jVarLocalBranchName.replace("BranOrders", "");

    if (jVarlocalBranch === null === false) {
        jVarlocalBranch.innerHTML = modifiedString;
    };
};

let jFLocalUserNameId = () => {
    let jVarLocalUserNameId = 'UserNameId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalUserNameId);
    let jVarLocalUserName = localStorage.getItem("UserName");

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.innerHTML = jVarLocalUserName;
    };
};
export { StartFunc }