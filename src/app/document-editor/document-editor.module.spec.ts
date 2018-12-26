import { DocumentEditorModule } from './document-editor.module';

describe('DocumentEditorModule', () => {
  let documentEditorModule: DocumentEditorModule;

  beforeEach(() => {
    documentEditorModule = new DocumentEditorModule();
  });

  it('should create an instance', () => {
    expect(documentEditorModule).toBeTruthy();
  });
});
