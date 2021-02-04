import request from "@/utils/request";

const base = "https://www.test.com";

export const getInfo = (code: string) => {
    return request({
        url: base + '/api',
        method: "get",
    });
};
