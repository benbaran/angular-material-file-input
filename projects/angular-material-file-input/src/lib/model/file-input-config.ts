import { InjectionToken } from '@angular/core';

export const NGX_MAT_FILE_INPUT_CONFIG = new InjectionToken<FileInputConfig>(
  'angular-material-file-input.config'
);

export interface FileInputConfig {
  sizeUnit: string;
}
