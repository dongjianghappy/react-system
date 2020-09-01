export const TEXT_TYPE = [
    {
        value: "single",
        name: "单行文本"
    },
    {
        value: "textarea",
        name: "多行文本"
    },
    {
        value: "radio",
        name: "单选框"
    }
]

// 友链平台
export const LINK_TYPE = [
    {
        value: "0",
        name: "2898"
    },
    {
        value: "1",
        name: "51链"
    },
    {
        value: "2",
        name: "易联网"
    },
    {
        value: "3",
        name: "95链"
    },
    {
        value: "4",
        name: "本站"
    },
    {
        value: "5",
        name: "爱链网"
    },
    {
        value: "6",
        name: "买链接"
    }
]

// 友链方式
export const LINK_METHOD = [
    {
        value: "0",
        name: "交换"
    },
    {
        value: "1",
        name: "出售"
    }
]

// 出售状态
export const SELL_STATUS = [
    {
        value: "0",
        name: "过期"
    },
    {
        value: "1",
        name: "正常"
    }
]

export const CHANNEL_TYPE = [
    {
        value: "article",
        name: "资讯"
    },
    {
        value: "topic",
        name: "专题"
    },
    {
        value: "picture",
        name: "图库"
    },
    {
        value: "tech",
        name: "技术"
    },
    {
        value: "source",
        name: "素材"
    }
]

 const enums = {
    textType: TEXT_TYPE,
    linkType: LINK_TYPE,
    channelType: CHANNEL_TYPE,
    linkMethod: LINK_METHOD,
    sellStatus: SELL_STATUS
}

export default enums