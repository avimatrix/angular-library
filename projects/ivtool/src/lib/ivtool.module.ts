import { NgModule } from '@angular/core';
import { IvtoolComponent } from './ivtool.component';
import { TreeComponent } from './Components/tree/tree.component';
import {CommonModule} from "@angular/common"
import { FormsModule } from '@angular/forms';
import { TreeModule } from 'primeng/tree';
import { ContextMenuModule } from 'primeng/contextmenu';



@NgModule({
  declarations: [IvtoolComponent, TreeComponent],
  imports: [
    CommonModule,
    FormsModule,
    TreeModule,
    ContextMenuModule
  ],
  exports: [IvtoolComponent,TreeComponent]
})
export class IvtoolModule { }
