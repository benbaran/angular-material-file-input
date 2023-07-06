import { InjectionToken } from '@angular/core';

export const NGX_MAT_FILE_INPUT_CONFIG = new InjectionToken<FileInputConfig>(
  'ngx-mat-file-input.config'
);

export interface FileInputConfig {
  sizeUnit: string;
}
