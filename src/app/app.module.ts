import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TdaComponent } from './tda/tda.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { MatCardModule } from '@angular/material';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTooltipModule } from '@angular/material';
import { ToolTipComponent } from './tool-tip/tool-tip.component';
@NgModule({
  declarations: [
    AppComponent,
    TdaComponent,
    DialogComponent,
    MyDialogComponent,
    ToolTipComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatDialogModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatTooltipModule,
  ],
  entryComponents: [
    MyDialogComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
