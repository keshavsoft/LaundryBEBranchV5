import { StartFunc as ShowOnDom } from "../../../../ShowOnDom/EntryFile.js";

let StartFunc = async ({ Status, inSuccessFunc }) => {
  let LocalStatus = Status;
  const CommonKeyName = "BranchName";
  let LocalUser = localStorage.getItem("UserUuId");
  if (LocalStatus.status === 200) {
    jFLocalModalClose();
    ShowOnDom();
    const token = getCookie("KSToken");
    if (token) {
      const payload = getPayload(token);
      if (payload) {
        console.log(payload);
        if (payload.UserUuId != LocalUser) {
          localStorage.setItem(CommonKeyName, `BranOrders${payload.Branch}`);
          localStorage.setItem("UserName", payload.UserName);
          localStorage.setItem("UserUuId", payload.UserUuId);
          window.location.href = "";
        }
      }
    }
    inSuccessFunc();
  }
  if (LocalStatus.status === 401) {
    jFLocalModalInputFocus();
  }
};

const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  return parts.length === 2 ? parts.pop().split(";").shift() : null;
};

const getPayload = (token) => {
  try {
    const [header, payload, signature] = token.split(".");
    return JSON.parse(atob(payload));
  } catch (error) {
    console.error("Error decoding JWT payload:", error);
    return null;
  }
};

let jFLocalModalClose = () => {
  const loginModalElement = document.getElementById("LoginModalId");
  const myModalAlternative = bootstrap.Modal.getInstance(loginModalElement);
  if (myModalAlternative) {
    myModalAlternative.hide();
  }
};

let jFLocalModalInputFocus = () => {
  let jVarLocalUsernameId = document.getElementById("UsernameId");
  let jVarLocalPasswordId = document.getElementById("PasswordId");
  jVarLocalUsernameId.classList.add("is-invalid");
  jVarLocalPasswordId.classList.add("is-invalid");
};

export { StartFunc };
