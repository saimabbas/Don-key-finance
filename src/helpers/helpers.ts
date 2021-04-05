import Web3 from "web3";

let web3: Web3 | null = null;
let isEnabling = false;
let done = false;

const waitUntilEnabled = () => {
    const promize = async (res: any, rej: any) => {
        await waitFor(1000);
        if (!isEnabling && done) {
            return res("");
        }
        if (isEnabling && !done) {
            promize(res, rej);
            // check again after few seconds
        }
    };

    return new Promise(promize);
};

export const getWeb3 = async () => {
    console.log("called");
    //@ts-ignore
    if (!window.ethereum) {
        window.alert("Please install MetaMask first.");
        return;
    }

    if (!web3) {
        try {
            // Request account access if needed

            if (isEnabling) {
                await waitUntilEnabled();
            }

            if (!isEnabling && !done) {
                console.log("enabling");
                isEnabling = true;
                //@ts-ignore

                await window.ethereum.enable();
            }

            // We don't know window.web3 version, so we use our own instance of Web3
            // with the injected provider given by MetaMask
            //@ts-ignore
            web3 = new Web3(window.ethereum);
        } catch (error) {
            window.alert("You need to allow MetaMask.");
            return;
        }
    }
    return web3;
};

export const waitFor = (time: number) => {
    return new Promise((res) => {
        setTimeout(res, time);
    });
};
export function uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
            var r = (Math.random() * 16) | 0,
                v = c === "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        }
    );
}

export const getQueryParam = (name: string) => {
    if (typeof window === "undefined") {
        return "";
    }
    const search = window.location.search;
    const queryString = decodeURIComponent(search.slice(1, search.length));
    const queryObj: any = {};
    queryString.split("&").forEach((item) => {
        const items = item.split("=");
        queryObj[items[0]] = items[1];
    });
    console.log(queryObj);
    return queryObj[name];
};

export const tuplify = <T extends any[]>(...args: T) => {
    return args;
};

function roundRect(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    radius: any,
    color1: string,
    color2: string
) {
    if (typeof radius === "undefined") {
        radius = 5;
    }

    radius = { tl: radius, tr: radius, br: radius, bl: radius };

    ctx.beginPath();
    ctx.moveTo(x + radius.tl, y);
    ctx.lineTo(x + width - radius.tr, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    ctx.lineTo(x + width, y + height - radius.br);
    ctx.quadraticCurveTo(
        x + width,
        y + height,
        x + width - radius.br,
        y + height
    );
    ctx.lineTo(x + radius.bl, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    ctx.lineTo(x, y + radius.tl);
    ctx.quadraticCurveTo(x, y, x + radius.tl, y);
    ctx.closePath();
    const grd = ctx.createLinearGradient(0, 0, 80, 0);
    grd.addColorStop(0, color1);
    grd.addColorStop(1, color2);
    ctx.fillStyle = grd;

    ctx.fill();
}

export const generateGradientImage = (color1: string, color2: string) => {
    if (typeof window === "undefined") {
        console.error("Only works in Client");
        return "";
    }
    const canvas = document.createElement("canvas");
    canvas.style.display = "none";
    canvas.width = 80;
    canvas.height = 48;
    document.body.append(canvas);
    const ctx = canvas.getContext("2d");
    if (!ctx) {
        return "";
    }
    roundRect(ctx, 0, 0, 80, 48, 4, color1, color2);

    const url = canvas.toDataURL();
    document.body.removeChild(canvas);
    canvas.remove();
    return url;
};
