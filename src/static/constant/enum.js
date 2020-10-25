// 模块
export const MODUDLE = [
    {
        value: "business",
        name: "运营",
        channel: false
    },
    {
        value: "setting",
        name: "设置",
        channel: false
    },
    {
        value: "service",
        name: "服务",
        channel: false
    },
    {
        value: "user",
        name: "用户",
        channel: false
    },
    {
        value: "article",
        name: "资讯",
        authority:"m:article",
        type: "channel"
    },
    {
        value: "source",
        name: "资源",
        authority:"m:source",
        type: "channel"
    },
    {
        value: "tech",
        name: "技术",
        authority:"m:tech",
        type: "channel"
    },
    {
        value: "picture",
        name: "图片",
        authority:"m:picture",
        type: "channel"
    },
    {
        value: "channel",
        name: "频道",
        type: "plate"
    },
    {
        value: "basic",
        name: "订单",
        type: "plate"
    },  
    {
        value: "user",
        name: "用户",
        type: "plate"
    },
    {
        value: "space",
        name: "空间",
        type: "plate"
    },
    {
        value: "space",
        name: "微博",
        type: "plate"
    },
]

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

// 数据类型
export const DATA_TYPE = [
    {
        value: "0",
        name: "过期"
    },
    {
        value: "1",
        name: "正常"
    }
]

// 表单元素类型
export const FORM_TYPE = [
    {
        value: "0",
        name: "单行文本"
    },
    {
        value: "1",
        name: "多行文本"
    },
    {
        value: "0",
        name: "单选框"
    },
    {
        value: "1",
        name: "复选框"
    }
,
    {
        value: "1",
        name: "下拉框"
    }    
]

// 广告来源
export const AD_SOURCE = [
    {
        value: "0",
        name: "本站广告"
    },
    {
        value: "1",
        name: "百度广告"
    },
    {
        value: "2",
        name: "阿里广告"
    },
    {
        value: "3",
        name: "谷广告歌"
    },
    {
        value: "4",
        name: "联盟广告"
    }
]
// 广告页面
export const AD_DISPLAY = [
    {
        value: "0",
        name: "全站"
    },
    {
        value: "1",
        name: "首页"
    },
    {
        value: "2",
        name: "栏目"
    },
    {
        value: "3",
        name: "详情"
    },
    {
        value: "4",
        name: "下载"
    }
]
// 广告类型
export const AD_TYPE = [
    {
        value: "0",
        name: "图片"
    },
    {
        value: "1",
        name: "文字"
    },
    {
        value: "2",
        name: "代码"
    }
]

// 文档排序方式
export const ARTICLE_ORDERBY = [
    {
        value: "desc",
        name: "ID递增"
    },
    {
        value: "asc",
        name: "ID递减"
    },
    {
        value: "2",
        name: "访问量"
    },
    {
        value: "3",
        name: "评论"
    },
    {
        value: "4",
        name: "下载量"
    }
]

// 关键词类型
export const KEYWORD_TYPE = [
    {
        value: "1",
        name: "核心关键词"
    },
    {
        value: "2",
        name: "目标关键词"
    },
    {
        value: "0",
        name: "长尾关键词"
    }
]

// 关键词类型
export const ORDER_TYPE = [
    {
        value: "0",
        name: "新订单"
    },
    {
        value: "1",
        name: "进行中"
    },
    {
        value: "2",
        name: "已完成"
    }
]


 const enums = {
    module: MODUDLE,
    textType: TEXT_TYPE,
    linkType: LINK_TYPE,
    channelType: CHANNEL_TYPE,
    linkMethod: LINK_METHOD,
    sellStatus: SELL_STATUS,
    dataTYpe: DATA_TYPE,
    formType: FORM_TYPE,
    // 广告
    adSource: AD_SOURCE,
    adType: AD_TYPE,
    adDisplay: AD_DISPLAY,
    articleOderBy: ARTICLE_ORDERBY,
    keywordTyoe: KEYWORD_TYPE,
    orderType: ORDER_TYPE
}

export default enums