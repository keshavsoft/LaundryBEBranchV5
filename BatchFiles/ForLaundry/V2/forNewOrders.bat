@echo off
cd ..\LaundryUiV2
git pull

call npm run NewOrders

xcopy .\publicDir\NewOrders ..\LaundryBEBranchV4\public\V4\Branch\NewOrders /h /i /c /k /e /r /y

cd ..\LaundryBEBranchV4