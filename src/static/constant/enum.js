// 模块
export const MODUDLE = [
    {
        value: "setting",
        name: "设置",
        channel: false
    },
    {
        value: "order",
        name: "订单",
        type: "plate",
        icon: "order"
    },  
    {
        value: "user",
        name: "用户",
        type: "plate",
        icon: "user"
    },
    {
        value: "service",
        name: "服务",
        type: "plate",
        icon: "service"
    },
    {
        value: "business",
        name: "运营",
        type: "plate",
        icon: "operation"
    },
    {
        value: "space",
        name: "空间",
        type: "plate",
        icon: "62gongzuokongjian"
    },
    {
        value: "weibo",
        name: "微博",
        type: "plate",
        icon: "star"
    },
    {
        value: "tag",
        name: "标签",
        type: "plate",
        icon: "tags"
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
        value: "input",
        name: "单行文本"
    },
    {
        value: "textarea",
        name: "多行文本"
    },
    {
        value: "radio",
        name: "单选框"
    },
    {
        value: "checkbox",
        name: "复选框"
    }
,
    {
        value: "select",
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

// 关键词类型
export const NAV_TYPE = [
    {
        value: "main",
        name: "主导航"
    },
    {
        value: "top",
        name: "顶部导航"
    },
    {
        value: "bottom",
        name: "底部导航"
    },
    {
        value: "quick",
        name: "快捷导航"
    },
    {
        value: "home",
        name: "家园导航"
    }
]

// 关键词类型
export const COLLECTTION_TYPE = [
    {
        value: "0",
        name: "普通文章"
    },
    {
        value: "1",
        name: "图片内容"
    }
]

// 公告类型
export const ANNOUNCEMENT_TYPE = [
    {
        value: "1",
        name: "公告"
    },
    {
        value: "2",
        name: "通知"
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
    orderType: ORDER_TYPE,
    navType: NAV_TYPE,
    collectionType: COLLECTTION_TYPE,
    announcementType: ANNOUNCEMENT_TYPE
}

export default enums