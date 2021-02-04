console.log("env: ", process.env.NODE_ENV);

const request = (options: any) => {
    return new Promise((resolve, reject) => {
        const { data, method } = options;
        if (data && method !== "get") {
            options.data = JSON.stringify(data);
        }

        wx.request({
            header: { "Content-Type": "application/json" },
            ...options,
            success: (res: any) => {
                resolve(res.data);
            },
            fail: (res: any) => {
                reject(res);
            },
        });
    });
};

export default request;
