var __decorate=this&&this.__decorate||function(e,o,r,t){var n,i=arguments.length,a=i<3?o:null===t?t=Object.getOwnPropertyDescriptor(o,r):t;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,o,r,t);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(a=(i<3?n(a):i>3?n(o,r,a):n(o,r))||a);return i>3&&a&&Object.defineProperty(o,r,a),a},__param=this&&this.__param||function(e,o){return function(r,t){o(r,t,e)}};import{registerEditorContribution}from"../../../browser/editorExtensions.js";import{ICodeEditorService}from"../../../browser/services/codeEditorService.js";import{ReferencesController}from"../../../contrib/gotoSymbol/browser/peek/referencesController.js";import{IConfigurationService}from"../../../../platform/configuration/common/configuration.js";import{IContextKeyService}from"../../../../platform/contextkey/common/contextkey.js";import{IInstantiationService}from"../../../../platform/instantiation/common/instantiation.js";import{INotificationService}from"../../../../platform/notification/common/notification.js";import{IStorageService}from"../../../../platform/storage/common/storage.js";let StandaloneReferencesController=class extends ReferencesController{constructor(e,o,r,t,n,i,a){super(!0,e,o,r,t,n,i,a)}};StandaloneReferencesController=__decorate([__param(1,IContextKeyService),__param(2,ICodeEditorService),__param(3,INotificationService),__param(4,IInstantiationService),__param(5,IStorageService),__param(6,IConfigurationService)],StandaloneReferencesController);export{StandaloneReferencesController};registerEditorContribution(ReferencesController.ID,StandaloneReferencesController);