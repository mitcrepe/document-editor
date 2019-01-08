import { TestBed } from '@angular/core/testing';

import { DocumentEditorService } from './document-editor.service';

describe('DocumentEditorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocumentEditorService = TestBed.get(DocumentEditorService);
    expect(service).toBeTruthy();
  });
});
