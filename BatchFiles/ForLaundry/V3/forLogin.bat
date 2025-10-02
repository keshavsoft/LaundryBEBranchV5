@echo off

SET CommonRepoName=LaundryUiV2
SET CommonFolderName=LoginUsers

if not exist "..\%CommonRepoName%\" (
    echo %CommonRepoName% folder not found. Cloning...
    git clone https://github.com/keshavsoft/%CommonRepoName% ..\%CommonRepoName%
)

if not exist "..\%CommonRepoName%\node_modules" (
    echo node_modules folder not found. Running npm install...
    pushd ..\%CommonRepoName%
    call npm i
    popd
)

cd ..\%CommonRepoName%
git pull

call npm run %CommonFolderName%

xcopy .\publicDir\%CommonFolderName% ..\LaundryBEBranchV4\public\V4\%CommonFolderName% /h /i /c /k /e /r /y

cd ..\LaundryBEBranchV4