var oneMinuteSignup=function(){function e(e){if(0===e.origin.indexOf(p))if("ShowTour"===e.data.type)m&&!u&&(m(),u=!0);else if("GetApplications"===e.data.type)o();else if("AddSiteToVault"===e.data.type){var n=LPProxy.getGroupByName(e.data.account.group),i=n||new DummyGroup(e.data.account.group,null),r=new Account;r.addFromDialog(e.data.account,i,{source:"vault"})}else if("Collapse"===e.data.type)$("body").removeClass("oneminfull"),$("body").addClass("oneminsmall");else if("Expand"===e.data.type)$("body").removeClass("oneminsmall"),$("body").addClass("oneminfull");else if("Close"===e.data.type)$("body").removeClass("oneminsmall"),$("body").removeClass("oneminfull"),$("#oneminutesignup").empty(),g=!1,$("#showReminders").removeAttr("disabled");else if("ReminderDeleted"===e.data.type){var a=l.filter(function(n){return n.id===e.data.reminder.id})[0];a&&(l.splice(l.indexOf(a),1),0===l.length?$("#reminderCountContainer").hide():($("#reminderCountContainer").show(),$("#reminderCount").text(l.length)))}else"RemindersAdded"===e.data.type&&(bg.set("g_reminders",bg.get("g_reminders").concat(e.data.reminders)),t())}function n(e){m=e}function t(){l=bg.get("g_reminders"),0===l.length?$("#reminderCountContainer").hide():($("#reminderCountContainer").show(),$("#reminderCount").text(l.length))}function i(){return l?l.length:0}function o(){var e=$("#oneminutesignup iframe")[0],n=LPProxy.getAllModelItems(),t=n.map(function(e){return{url:e._data.url,userName:e._data.unencryptedUsername}});e.contentWindow.postMessage({type:"SendApplications",applications:t},p)}function r(){"started"!==bg.OmsNotificationPopup.getState()&&(d("normal",a()),bg.OmsNotificationPopup.setState("started"))}function a(){var e=bg.get("g_username");return-1!==e.indexOf("@gmail")?"Gmail":-1!==e.indexOf("@yahoo")?"Yahoo":-1!==e.indexOf("@outlook")?"Office365":"Unknown"}function d(n,t){(bg.get("g_one_minute_signup_enabled")||bg.get("g_onemin_advert_enabled"))&&(g||(n=n||s.normal,bg.get_method_async(function(i){i=i||"Unknown",g=!0,$("#showReminders").attr("disabled","disabled"),$("#inProgressWithSpinner").toggle(),$.ajax({global:!1,type:"GET",dataType:"json",url:LPProxy.getBaseURL()+"lmiapi/clientconfig",success:function(o){var r=document.createElement("iframe");p=o["1minUiBaseUrl"],r.setAttribute("src",p+"/index.html"),r.setAttribute("class","onemin"),r.setAttribute("width","100%"),r.setAttribute("height","100%"),r.setAttribute("frameborder","0"),r.style.position="absolute",$(r).load(function(){$("#inProgressWithSpinner").toggle(),n===s.reminder&&r.contentWindow.postMessage({type:"DisplayMode",mode:n,reminders:l,method:i},p),n===s.normal&&r.contentWindow.postMessage({type:"DisplayMode",mode:n,reminders:l,provider:t,method:i},p)}),$("#oneminutesignup").empty(),$("#oneminutesignup").append(r),window.addEventListener("message",e)}})})))}var s={normal:"normal",reminder:"reminder"},l=[],m=null,u=null,g=!1,p=null;return{show:d,showWithProvider:r,setOpenTourFn:n,fetchReminders:t,getReminderCount:i,modes:s}}();