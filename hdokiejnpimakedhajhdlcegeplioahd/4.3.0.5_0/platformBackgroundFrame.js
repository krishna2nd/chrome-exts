LPPlatform="undefined"==typeof LPPlatform?{}:LPPlatform,function(){LPPlatform.isMac=function(){return"undefined"!=typeof navigator&&-1!=navigator.appVersion.indexOf("Mac")},LPPlatform.getUILanguage=function(){return parent.LPTools.getURLParams().lplanguage||"en-US"}}(),function(e){e.translate=function(e){return gs(e)},e.isWin=function(){return"undefined"!=typeof navigator&&-1!=navigator.appVersion.indexOf("Windows")},function(){var n=null,t=[],a=function(e){var t=e.callback;e.callback=function(e){for(var n in e)window[n]=e[n];t&&t()},n.LPData.getData(e)},r=function(e){"string"==typeof e&&-1===t.indexOf(e)&&t.push(e),setInterval(function(){a({context:t,triggers:{g_local_accts_version:n.get("g_local_accts_version")}})},1e3)};e.getBackgroundInterface=function(t){return null===n&&(n=e.createBackgroundInterface(t)),t.getData?n.getData({context:t.context,callback:t.callback}):t.callback&&t.callback(n),n},e.createBackgroundInterface=function(n){g_bg=window;var c=new LPBackgroundRequester(e.requestFrameworkInitializer,{interfaceDefinition:n.interfaceDefinition,interfaceName:n.interfaceDefinition?parent.Interfaces.getName(n.interfaceDefinition):null,reflectionContext:parent,mainRequestFramework:void 0===n.mainRequestFramework||n.mainRequestFramework});c.initialize();var i=function(e){c.sendRequest({type:"backgroundRequest",data:e})},o=Interfaces.createInstance(Interfaces.BackgroundInterface,{context:n.context,source:window,direct:!1,requestFunction:i});return"undefined"!=typeof parent&&parent.Topics&&parent.Topics.get(parent.Topics.CLEAR_DATA).subscribe(function(){Interfaces.clearPrimitives({interface:Interfaces.BackgroundInterface,context:t,source:window})}),o.getData=function(e){var t=e.callback;e.callback=function(){n.pollBackground&&r(e.context),t&&t(o)},a(e)},parent.LPDialog&&(parent.LPDialog.beforeLoad=function(e,n){Interfaces.createInstance(Interfaces.BackgroundInterface,{instance:o,context:e,source:window,direct:!1,requestFunction:i}),o.getData({context:e,callback:function(){parent.LPProxy.initializeModel(),n()}})}),n.backgroundIntitialization&&n.backgroundIntitialization(o),o}}(),function(){e.adjustPreferenceDefaults=function(e){e.disablepasswordmanagerasked=!1},e.getPreference=function(e){return g_userprefs.hasOwnProperty(e)?g_userprefs[e]:g_gblprefs[e]},e.setUserPreference=function(e,n){g_userprefs[e]=n},e.setGlobalPreference=function(e,n){g_gblprefs[e]=n},e.writePreferences=function(){}}()}(LPPlatform);