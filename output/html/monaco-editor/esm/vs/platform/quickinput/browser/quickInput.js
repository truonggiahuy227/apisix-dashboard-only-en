var __decorate=this&&this.__decorate||function(t,e,r,o){var i,n=arguments.length,u=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)u=Reflect.decorate(t,e,r,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(u=(n<3?i(u):n>3?i(e,r,u):i(e,r))||u);return n>3&&u&&Object.defineProperty(e,r,u),u},__param=this&&this.__param||function(t,e){return function(r,o){e(r,o,t)}};import{CancellationToken}from"../../../base/common/cancellation.js";import{QuickInputController}from"../../../base/parts/quickinput/browser/quickInput.js";import{IAccessibilityService}from"../../accessibility/common/accessibility.js";import{IContextKeyService,RawContextKey}from"../../contextkey/common/contextkey.js";import{IInstantiationService}from"../../instantiation/common/instantiation.js";import{ILayoutService}from"../../layout/browser/layoutService.js";import{WorkbenchList}from"../../list/browser/listService.js";import{QuickAccessController}from"./quickAccess.js";import{activeContrastBorder,badgeBackground,badgeForeground,buttonBackground,buttonForeground,buttonHoverBackground,contrastBorder,inputBackground,inputBorder,inputForeground,inputValidationErrorBackground,inputValidationErrorBorder,inputValidationErrorForeground,inputValidationInfoBackground,inputValidationInfoBorder,inputValidationInfoForeground,inputValidationWarningBackground,inputValidationWarningBorder,inputValidationWarningForeground,keybindingLabelBackground,keybindingLabelBorder,keybindingLabelBottomBorder,keybindingLabelForeground,pickerGroupBorder,pickerGroupForeground,progressBarBackground,quickInputBackground,quickInputForeground,quickInputListFocusBackground,quickInputListFocusForeground,quickInputListFocusIconForeground,quickInputTitleBackground,widgetShadow}from"../../theme/common/colorRegistry.js";import{computeStyles}from"../../theme/common/styler.js";import{IThemeService,Themable}from"../../theme/common/themeService.js";let QuickInputService=class extends Themable{constructor(t,e,r,o,i){super(r),this.instantiationService=t,this.contextKeyService=e,this.accessibilityService=o,this.layoutService=i,this.contexts=new Map}get controller(){return this._controller||(this._controller=this._register(this.createController())),this._controller}get quickAccess(){return this._quickAccess||(this._quickAccess=this._register(this.instantiationService.createInstance(QuickAccessController))),this._quickAccess}createController(t=this.layoutService,e){var r,o;const i={idPrefix:"quickInput_",container:t.container,ignoreFocusOut:()=>!1,isScreenReaderOptimized:()=>this.accessibilityService.isScreenReaderOptimized(),backKeybindingLabel:()=>{},setContextKey:t=>this.setContextKey(t),returnFocus:()=>t.focus(),createList:(t,e,r,o,i)=>this.instantiationService.createInstance(WorkbenchList,t,e,r,o,i),styles:this.computeStyles()},n=this._register(new QuickInputController(Object.assign(Object.assign({},i),e)));return n.layout(t.dimension,null!==(o=null===(r=t.offset)||void 0===r?void 0:r.top)&&void 0!==o?o:0),this._register(t.onDidLayout((e=>{var r,o;return n.layout(e,null!==(o=null===(r=t.offset)||void 0===r?void 0:r.top)&&void 0!==o?o:0)}))),this._register(n.onShow((()=>this.resetContextKeys()))),this._register(n.onHide((()=>this.resetContextKeys()))),n}setContextKey(t){let e;t&&(e=this.contexts.get(t),e||(e=new RawContextKey(t,!1).bindTo(this.contextKeyService),this.contexts.set(t,e))),e&&e.get()||(this.resetContextKeys(),e&&e.set(!0))}resetContextKeys(){this.contexts.forEach((t=>{t.get()&&t.reset()}))}pick(t,e={},r=CancellationToken.None){return this.controller.pick(t,e,r)}createQuickPick(){return this.controller.createQuickPick()}updateStyles(){this.controller.applyStyles(this.computeStyles())}computeStyles(){return{widget:Object.assign({},computeStyles(this.theme,{quickInputBackground:quickInputBackground,quickInputForeground:quickInputForeground,quickInputTitleBackground:quickInputTitleBackground,contrastBorder:contrastBorder,widgetShadow:widgetShadow})),inputBox:computeStyles(this.theme,{inputForeground:inputForeground,inputBackground:inputBackground,inputBorder:inputBorder,inputValidationInfoBackground:inputValidationInfoBackground,inputValidationInfoForeground:inputValidationInfoForeground,inputValidationInfoBorder:inputValidationInfoBorder,inputValidationWarningBackground:inputValidationWarningBackground,inputValidationWarningForeground:inputValidationWarningForeground,inputValidationWarningBorder:inputValidationWarningBorder,inputValidationErrorBackground:inputValidationErrorBackground,inputValidationErrorForeground:inputValidationErrorForeground,inputValidationErrorBorder:inputValidationErrorBorder}),countBadge:computeStyles(this.theme,{badgeBackground:badgeBackground,badgeForeground:badgeForeground,badgeBorder:contrastBorder}),button:computeStyles(this.theme,{buttonForeground:buttonForeground,buttonBackground:buttonBackground,buttonHoverBackground:buttonHoverBackground,buttonBorder:contrastBorder}),progressBar:computeStyles(this.theme,{progressBarBackground:progressBarBackground}),keybindingLabel:computeStyles(this.theme,{keybindingLabelBackground:keybindingLabelBackground,keybindingLabelForeground:keybindingLabelForeground,keybindingLabelBorder:keybindingLabelBorder,keybindingLabelBottomBorder:keybindingLabelBottomBorder,keybindingLabelShadow:widgetShadow}),list:computeStyles(this.theme,{listBackground:quickInputBackground,listInactiveFocusForeground:quickInputListFocusForeground,listInactiveSelectionIconForeground:quickInputListFocusIconForeground,listInactiveFocusBackground:quickInputListFocusBackground,listFocusOutline:activeContrastBorder,listInactiveFocusOutline:activeContrastBorder,pickerGroupBorder:pickerGroupBorder,pickerGroupForeground:pickerGroupForeground})}}};QuickInputService=__decorate([__param(0,IInstantiationService),__param(1,IContextKeyService),__param(2,IThemeService),__param(3,IAccessibilityService),__param(4,ILayoutService)],QuickInputService);export{QuickInputService};