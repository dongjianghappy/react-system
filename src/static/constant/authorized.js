// 站点信息
export const basic = {
	add: 'b:basic:add',
	del: 'b:basic:delete',
	edit: 'b:basic:edit'
}

// 友情链接
export const link = {
	add: 'b:manage:link:add',
	del: 'b:manage:link:delete',
	edit: 'b:manage:link:edit'
}

// 合作伙伴
export const partner = {
	add: 'b:manage:partner:add',
	del: 'b:manage:partner:delete',
	edit: 'b:manage:partner:edit'
}

// 公告
export const announcement = {
	add: 'b:manage:announcement:add',
	del: 'b:manage:announcement:delete',
	edit: 'b:manage:announcement:edit'
}  

// 幻灯片
export const slideshow = {
	cate: {
		add: 'b:manage:slideshow:add',
		del: 'b:manage:slideshow:delete',
		edit: 'b:manage:slideshow:edit'
	},
	art: {
		add: 'b:manage:slideshow:list:add',
		del: 'b:manage:slideshow:list:delete',
		edit: 'b:manage:slideshow:list:edit'
	}

}  

// 在线留言
export const messageBoard = {
	reply: 'b:site:function:messageBoard:reply',
	del: 'b:site:function:messageBoard:delete',
	edit: 'b:site:function:messageBoard:edit'
}  

// 意见反馈
export const feedback = {
	del: 'b:site:function:feedback:delete',
	edit: 'b:site:function:feedback:edit'
}  


// 导航单页
export const navigation = {
	main: {
		add: 'b:navigation:main:article',
		del: 'b:navigation:main:delete',
		edit: 'b:navigation:main:edit'
	},
	single: {
		add: 'm:navigation:single:add',
		del: 'b:navigation:single:delete',
		edit: 'm:navigation:single:edit'
	}

}  

// 应用商城
export const appstore = {
	add: 'b:setting:appstore:add',
	del: 'b:setting:appstore:delete',
	edit: 'b:setting:appstore:edit',
	grade: 'b:setting:appstore:grade'
}  

// 采集管理
export const collection = {
	cate: {
		add: 'b:setting:collection:node:add',
		del: 'b:setting:collection:node:delete',
		start: 'b:setting:collection:node:start'
	},
	art: {
		del: 'b:setting:collection:article:delete',
		edit: 'b:setting:collection:article:edit'
	}
}  

// 模型管理
export const customize = {
	cate: {
		add: 'b:setting:collection:node:add',
		del: 'b:setting:collection:node:delete',
		start: 'b:setting:collection:node:start'
	},
	art: {
		add: 'b:setting:customize:field:add',
		del: 'b:setting:customize:field:delete',
		edit: 'b:setting:customize:field:edit'
	}
} 

// 用户管理
export const user = {
	list: {
		recommend: 'b:user:type:list:recommend',
		setting: 'b:user:type:list:setting',
		banuser: 'b:user:type:list:banuser',
		email: 'b:user:type:list:email',
	},
	grade: {
		add: 'b:user:sign:add',
		del: 'b:user:sign:delete',
		edit: 'b:user:sign:edit'
	},
	recommend: {
		cancel: 'b:user:recommend:cancel'
	},
	role: {
		add: 'b:user:role:add',
		del: 'b:user:role:delete',
		edit: 'b:user:role:edit',
		view: 'b:user:role:view',
	},	
	roleGrade:{
		edit: 'b:user:role:grade:edit'
	},
	group: {
		add: 'b:user:group:add',
		edit: 'b:user:group:edit'
	},
	sign: {
		add: 'b:user:sign:add',
		del: 'b:user:sign:delete',
		edit: 'b:user:sign:edit'
	},
	banuser: {
		remove: 'b:user:sign:add'
	},
	security: {
		add: 'b:user:security:add',
		del: 'b:user:security:delete',
		edit: 'b:user:security:edit'
	},
	theme: {
		add: 'b:user:theme:add',
		del: 'b:user:theme:delete',
		edit: 'b:user:theme:edit'		
	}
} 


// 服务
export const service = {
	job: {
		add: 'b:service:job:position:add',
		del: 'b:service:job:position:delete',
		edit: 'b:service:job:position:edit'
	},
	resume: {
		del: 'b:service:job:resume:delete'
	}
} 

// 推广
export const spread = {
	add: 'b:business:spread:add',
	del: 'b:business:spread:delete',
	edit: 'b:business:spread:edit'
}  

// 广告
export const advertisement = {
	add: 'b:business:advertisement:add',
	del: 'b:business:advertisement:delete',
	edit: 'b:business:advertisement:edit'
}  


export const channel = {
	article: {
		cate: {
			add: 'b:setting:collection:node:add',
			del: 'b:setting:collection:node:delete',
			start: 'b:setting:collection:node:start'
		},
		art: {
			add: 'b:article:manage:article:add',
			del: 'b:article:manage:article:delete',
			edit: 'b:article:manage:article:edit'
		}
	}
}


const authorized = {
	basic,
	link,
	partner,
	announcement,
	slideshow,
	messageBoard,
	feedback,
	navigation,
	navigation,
	appstore,
	collection,
	customize,
	user,
	service,
	spread,
	advertisement,
	channel
}


debugger
export default authorized