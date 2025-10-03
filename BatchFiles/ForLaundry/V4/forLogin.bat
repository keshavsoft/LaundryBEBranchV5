@echo off

call :getNextVersion NEXT_VERSION
echo Next Version: %NEXT_VERSION%

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

xcopy .\publicDir\%CommonFolderName% ..\LaundryBEBranchV5\public\%NEXT_VERSION%\%CommonFolderName% /h /i /c /k /e /r /y

cd ..\LaundryBEBranchV5

exit /b

:getNextVersion
setlocal enabledelayedexpansion
set "max=0"
for /d %%G in (Public\V*) do (
    set "folder=%%~nxG"
    set "ver=!folder:V=!"
    REM Check if numeric
    for /f "delims=0123456789" %%a in ("!ver!") do set "ver=0"
    if !ver! gtr !max! set "max=!ver!"
)
set /a NEXT_VERSION=max+1
endlocal & set "%1=V%NEXT_VERSION%"
exit /b
