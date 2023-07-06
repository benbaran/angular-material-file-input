import { NgModule } from '@angular/core';
import { ByteFormatPipe } from './pipe/byte-format.pipe';
import { FileInputComponent } from './file-input/file-input.component';
import { FocusMonitor } from '@angular/cdk/a11y';

@NgModule({
  declarations: [ByteFormatPipe, FileInputComponent],
  providers: [FocusMonitor],
  exports: [FileInputComponent, ByteFormatPipe],
})
export class AngularMaterialFileInputModule {}
