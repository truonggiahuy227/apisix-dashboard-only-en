import*as nls from"../../nls.js";import{RawContextKey}from"../../platform/contextkey/common/contextkey.js";export var EditorContextKeys;(function(e){e.editorSimpleInput=new RawContextKey("editorSimpleInput",!1,!0),e.editorTextFocus=new RawContextKey("editorTextFocus",!1,nls.localize("editorTextFocus","Whether the editor text has focus (cursor is blinking)")),e.focus=new RawContextKey("editorFocus",!1,nls.localize("editorFocus","Whether the editor or an editor widget has focus (e.g. focus is in the find widget)")),e.textInputFocus=new RawContextKey("textInputFocus",!1,nls.localize("textInputFocus","Whether an editor or a rich text input has focus (cursor is blinking)")),e.readOnly=new RawContextKey("editorReadonly",!1,nls.localize("editorReadonly","Whether the editor is read only")),e.inDiffEditor=new RawContextKey("inDiffEditor",!1,nls.localize("inDiffEditor","Whether the context is a diff editor")),e.columnSelection=new RawContextKey("editorColumnSelection",!1,nls.localize("editorColumnSelection","Whether `editor.columnSelection` is enabled")),e.writable=e.readOnly.toNegated(),e.hasNonEmptySelection=new RawContextKey("editorHasSelection",!1,nls.localize("editorHasSelection","Whether the editor has text selected")),e.hasOnlyEmptySelection=e.hasNonEmptySelection.toNegated(),e.hasMultipleSelections=new RawContextKey("editorHasMultipleSelections",!1,nls.localize("editorHasMultipleSelections","Whether the editor has multiple selections")),e.hasSingleSelection=e.hasMultipleSelections.toNegated(),e.tabMovesFocus=new RawContextKey("editorTabMovesFocus",!1,nls.localize("editorTabMovesFocus","Whether `Tab` will move focus out of the editor")),e.tabDoesNotMoveFocus=e.tabMovesFocus.toNegated(),e.isInWalkThroughSnippet=new RawContextKey("isInEmbeddedEditor",!1,!0),e.canUndo=new RawContextKey("canUndo",!1,!0),e.canRedo=new RawContextKey("canRedo",!1,!0),e.hoverVisible=new RawContextKey("editorHoverVisible",!1,nls.localize("editorHoverVisible","Whether the editor hover is visible")),e.inCompositeEditor=new RawContextKey("inCompositeEditor",void 0,nls.localize("inCompositeEditor","Whether the editor is part of a larger editor (e.g. notebooks)")),e.notInCompositeEditor=e.inCompositeEditor.toNegated(),e.languageId=new RawContextKey("editorLangId","",nls.localize("editorLangId","The language identifier of the editor")),e.hasCompletionItemProvider=new RawContextKey("editorHasCompletionItemProvider",!1,nls.localize("editorHasCompletionItemProvider","Whether the editor has a completion item provider")),e.hasCodeActionsProvider=new RawContextKey("editorHasCodeActionsProvider",!1,nls.localize("editorHasCodeActionsProvider","Whether the editor has a code actions provider")),e.hasCodeLensProvider=new RawContextKey("editorHasCodeLensProvider",!1,nls.localize("editorHasCodeLensProvider","Whether the editor has a code lens provider")),e.hasDefinitionProvider=new RawContextKey("editorHasDefinitionProvider",!1,nls.localize("editorHasDefinitionProvider","Whether the editor has a definition provider")),e.hasDeclarationProvider=new RawContextKey("editorHasDeclarationProvider",!1,nls.localize("editorHasDeclarationProvider","Whether the editor has a declaration provider")),e.hasImplementationProvider=new RawContextKey("editorHasImplementationProvider",!1,nls.localize("editorHasImplementationProvider","Whether the editor has an implementation provider")),e.hasTypeDefinitionProvider=new RawContextKey("editorHasTypeDefinitionProvider",!1,nls.localize("editorHasTypeDefinitionProvider","Whether the editor has a type definition provider")),e.hasHoverProvider=new RawContextKey("editorHasHoverProvider",!1,nls.localize("editorHasHoverProvider","Whether the editor has a hover provider")),e.hasDocumentHighlightProvider=new RawContextKey("editorHasDocumentHighlightProvider",!1,nls.localize("editorHasDocumentHighlightProvider","Whether the editor has a document highlight provider")),e.hasDocumentSymbolProvider=new RawContextKey("editorHasDocumentSymbolProvider",!1,nls.localize("editorHasDocumentSymbolProvider","Whether the editor has a document symbol provider")),e.hasReferenceProvider=new RawContextKey("editorHasReferenceProvider",!1,nls.localize("editorHasReferenceProvider","Whether the editor has a reference provider")),e.hasRenameProvider=new RawContextKey("editorHasRenameProvider",!1,nls.localize("editorHasRenameProvider","Whether the editor has a rename provider")),e.hasSignatureHelpProvider=new RawContextKey("editorHasSignatureHelpProvider",!1,nls.localize("editorHasSignatureHelpProvider","Whether the editor has a signature help provider")),e.hasInlayHintsProvider=new RawContextKey("editorHasInlayHintsProvider",!1,nls.localize("editorHasInlayHintsProvider","Whether the editor has an inline hints provider")),e.hasDocumentFormattingProvider=new RawContextKey("editorHasDocumentFormattingProvider",!1,nls.localize("editorHasDocumentFormattingProvider","Whether the editor has a document formatting provider")),e.hasDocumentSelectionFormattingProvider=new RawContextKey("editorHasDocumentSelectionFormattingProvider",!1,nls.localize("editorHasDocumentSelectionFormattingProvider","Whether the editor has a document selection formatting provider")),e.hasMultipleDocumentFormattingProvider=new RawContextKey("editorHasMultipleDocumentFormattingProvider",!1,nls.localize("editorHasMultipleDocumentFormattingProvider","Whether the editor has multiple document formatting providers")),e.hasMultipleDocumentSelectionFormattingProvider=new RawContextKey("editorHasMultipleDocumentSelectionFormattingProvider",!1,nls.localize("editorHasMultipleDocumentSelectionFormattingProvider","Whether the editor has multiple document selection formatting providers"))})(EditorContextKeys||(EditorContextKeys={}));