/*! Copyright 2009-2017 Evernote Corporation. All rights reserved. */

!function(){function a(a){this._onUpdated=a&&"function"==typeof a.onUpdated?a.onUpdated:null,this.host=a.host||"",this.slot=a.slot||0,this._notify=a.notify,this._userInfo=a.userInfo||null,this._isBusinessAuthenticationRequired=!1,this._accountIsOffline=!1}var b=function(a,b){if(a&&!/\/u\/\d+\//.test(a))return a.replace(/(shard\/[^\/]*)/i,"$1/u/"+b)},c=function(a,c){a&&Object.keys(a).forEach(function(d){a[d]=b(a[d],c)})},d=function(a){if("object"!=typeof a||!a.id)return null;var b={authenticationToken:"",userId:a.id.toString(),username:a.username,basic:a.serviceLevel===ServiceLevel.BASIC,plus:a.serviceLevel===ServiceLevel.PLUS,premium:a.serviceLevel===ServiceLevel.PREMIUM,isOnlyBusiness:4===a.serviceLevel,shardId:a.shardId,fullName:a.name||a.username,email:a.email,quota:a.accountLimits.uploadLimit,noteSizeMax:a.accountLimits.noteSizeMax,userNoteCountMax:a.accountLimits.userNoteCountMax,monthEnd:a.accounting.uploadLimitEnd,photoUrl:a.photoUrl,urls:null,created:a.created,serviceLevel:a.serviceLevel};return Object.defineProperty(b,"id",{get:function(){throw new Error("Incorrect propery access id")}}),a.businessUserInfo&&(b.businessId=a.businessUserInfo.businessId,b.businessName=a.businessUserInfo.businessName),b.isOnlyBusiness?b.accountType=GlobalUtils.ACCOUNT_TYPE_ONLY_BUSINESS:a.businessUserInfo?b.accountType=GlobalUtils.ACCOUNT_TYPE_BUSINESS:b.accountType=GlobalUtils.ACCOUNT_TYPE_PERSONAL,b},e=function(a){return"object"==typeof a&&a.authenticationToken?{bizAuthenticationToken:a.authenticationToken,bizExpiration:a.expiration,bizUrls:JSON.parse(JSON.stringify(a.urls)),bizShardId:a.user.shardId,bizUserId:a.user.id,bizUserName:a.user.username,bizQuota:a.user.accountLimits.uploadLimit,bizNoteSizeMax:a.user.accountLimits.noteSizeMax,bizUserNoteCountMax:a.user.accountLimits.userNoteCountMax,bizMonthEnd:a.user.accounting.uploadLimitEnd}:null},f=function(a,b,c){return new Promise(function(d,e){a[b](c,d,e)})};window.Account=a,Object.defineProperty(a.prototype,"isAuthenticated",{get:function(){return!!this.userInfo.userId}}),Object.defineProperty(a.prototype,"isBusinessAuthenticationRequired",{get:function(){return!!this._isBusinessAuthenticationRequired}}),Object.defineProperty(a.prototype,"userInfo",{get:function(){return this._userInfo||{}},set:function(a){"object"==typeof a?this._userInfo=a:a?console.error("You are trying to save invalid user info object."):this._userInfo=null}}),a.prototype.bumpUploadLimitEnd=function(){var a=this.userInfo;return!!(a.monthEnd&&a.monthEnd<Date.now())&&(a.monthEnd+=2592e6,this.userInfo=a,!0)},a.prototype.login=function(){return this.userInfo=null,this.reload(!0)},a.prototype.reload=function(g){var h=this;return new Promise(function(i,j){var k=storeFactory.createDefaultUserStoreClient(h.host,h.slot),l="",m=null,n=function(b){var c=0,d=b&&b instanceof ProgressEvent&&"error"===b.type,e=b instanceof EDAMUserException,f=[EDAMErrorCode.BAD_DATA_FORMAT,EDAMErrorCode.PERMISSION_DENIED,EDAMErrorCode.DATA_REQUIRED,EDAMErrorCode.INVALID_AUTH,EDAMErrorCode.AUTH_EXPIRED,EDAMErrorCode.ACCOUNT_CLEAR];d?(h._accountIsOffline||(log.warn("Account offline"),h._accountIsOffline=!0),c=a.OFFLINE):(h._accountIsOffline&&(log.warn("Account online"),h._accountIsOffline=!1),b?(e&&f.indexOf(b.errorCode)>-1?(c=0,log.warn("Got error: "+JSON.stringify(b)+". Clipper logged out"),g&&"authenticationToken"===b.parameter&&DebugTools.checkSecurePageAccessible(h.host).then(function(a){a&&h._notify(Browser.i18n.getMessage("Error_3rdPartyCookies","Error_3rdPartyCookiesTitle"))}),b.errorCode===EDAMErrorCode.ACCOUNT_CLEAR&&(Persistent.clearForUser("notebooksCache",h.userInfo.userId),h.logout())):(log.error("Got unexpected error: "+JSON.stringify(b)+"."),c=a.ERROR),h.userInfo=null):m&&(h.userInfo=m)),h.isAuthenticated&&(c|=a.AUTHENTICATED),h._onUpdated&&h._onUpdated.call(h,c),c&a.ERROR?j(b):i(h.userInfo)};new Promise(function(a){EDGE&&Browser.getMajorVersion()<15?chrome.cookies.getAll({url:"https://"+h.host+"/",name:"clipper-sso"+(h.slot?h.slot:"")},function(b){b&&b.length&&(l=(b[0].value||"").replace(/"/g,"")),a()}):a()}).then(function(){return f(k,"getUser",l)}).then(function(a){if(m=d(a),l&&m&&(m.authenticationToken=l),m&&a.businessUserInfo)return f(k,"authenticateToBusiness",l).then(function(a){a&&(h._isBusinessAuthenticationRequired=!1,Object.assign(m,e(a)),m.isOnlyBusiness&&(m.quota=m.bizQuota,m.noteSizeMax=m.bizNoteSizeMax,m.userNoteCountMax=m.bizUserNoteCountMax,m.monthEnd=m.bizMonthEnd))}).catch(function(a){if(!(a instanceof EDAMUserException&&a.errorCode===EDAMErrorCode.BUSINESS_SECURITY_LOGIN_REQUIRED))throw a;h._isBusinessAuthenticationRequired=!0})}).then(function(){return m?f(k,"getUserUrls",l):null}).then(function(a){a&&(m.urls=JSON.parse(JSON.stringify(a))),h.userInfo=m,h.userInfo.userSlot=h.slot,c(h.userInfo.urls,h.slot),c(h.userInfo.bizUrls,h.slot),h.userInfo.photoUrl=b(h.userInfo.photoUrl,h.slot)}).then(n).catch(n)})},a.prototype.logout=function(b){var c=this;return new Promise(function(d){var e=b?"":"/u/"+c.userInfo.userSlot,f=b?"Logout.action":"ClipperLogout.action",g="https://"+c.host+e+"/"+f;(EDGE||SAFARI)&&Browser.openTab(g);var h=new XMLHttpRequest;h.open("GET",g,!0),h.onreadystatechange=function(){if(h.readyState===this.DONE){var b=0;200===h.status?c.userInfo=null:b=0===h.status?a.OFFLINE:a.ERROR,d(b),c._onUpdated&&c._onUpdated.call(c,b)}},h.send()})},a.AUTHENTICATED=1,a.OFFLINE=2,a.ERROR=4}();