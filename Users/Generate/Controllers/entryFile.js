import { StartFunc as StartFuncFromCreateToken } from "../../../Token/jwt/CreateToken.js";

import { postDefaultFunc as postDefaultFuncFromRepo } from "../Repos/entryFile.js";

let postFilterDataFromBodyFunc = (req, res) => {
  let LocalRequestBody = req.body;
  let LocalUserName = LocalRequestBody.UserName;
  let LocalPassword = LocalRequestBody.Password;

  let LocalFromRepo = postDefaultFuncFromRepo({
    inUserName: LocalUserName,
    inPassword: LocalPassword,
  });

  if (LocalFromRepo.KTF === false) {
    res.status(409).send(LocalFromRepo.KTF);
    return;
  }
  let inObject = {};
  inObject.BranchName = LocalFromRepo?.BranchName;

  const jVarLocalToken = StartFuncFromCreateToken(inObject);

  res.set("Content-Type", "text/plain");
  res
    .cookie("KSToken", jVarLocalToken, { maxAge: 900000, httpOnly: false })
    .end(jVarLocalToken);
};

export { postFilterDataFromBodyFunc };
