import defaultJson from './default.json' with { type: 'json' };

const StartFunc = ({ inBranch }) => {
    const modifiedBranch = inBranch.replace("BranOrders", "");
    return {
        ...defaultJson,
        OrderData: {
            ...defaultJson.OrderData,
            BranchName: modifiedBranch,
            Currentdateandtime: new Date().toISOString()
        }
    };
};

export { StartFunc };
