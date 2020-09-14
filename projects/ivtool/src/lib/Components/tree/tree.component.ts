import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { TreeNode, MenuItem } from 'primeng/api';
// import * as swal from '../../../helpers/swal-helper';
// import { messages } from '../../../messages';
import { ContextMenu } from 'primeng/contextmenu';
import { TreeItem } from "../../models/treeItem";
import { ComponentType, ItemType } from '../../models/domain';
import * as _ from 'lodash';
import * as util from '../../helpers/util';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'lib-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  @ViewChild('closeAddItemPopup',{static:false}) closeAddItemPopup: ElementRef;
  @ViewChild('subItemPopup',{static:false}) openSubItempopup: ElementRef;
  @ViewChild('closeRenameItemPopup',{static:false}) closeRenameItemPopup: ElementRef;
  @ViewChild('renameItemPopup',{static:false}) openRenameItempopup: ElementRef;
  @ViewChild('cm',{static:false}) cm: ContextMenu;
  @ViewChild('addForm',{static:false}) private addForm: NgForm;
  @Input() itemsList: any;
  @Input() inputSelectedItem: any;
  @Input() showContextMenu: boolean;
  @Input() componentType: number;
  @Input() isAddBtnVisible = true;
  @Output() addItem = new EventEmitter<object>();
  @Output() addSubItem = new EventEmitter<object>();
  @Output() renameItem = new EventEmitter<object>();
  @Output() deleteItem = new EventEmitter<object>();
  @Output() getSelected = new EventEmitter<object>();
  constructor() { }
  title: string;
  name: string;
  parentId: number;
  selectedNode: any;
  items: MenuItem[];
  isSubItem = false;
  selectedItem: TreeNode;
  itemPath = "";
  itemType = "item";
  isExpand = false;
  filterPlaceHolder: string;
  isAddSubmitted = false;
  util = util;
  renameCopy: string = "";

  ngOnInit(): void {
    this.setItemType();
    if (util.isValidValue(this.inputSelectedItem)) { this.selectedItem = this.inputSelectedItem; }
  }

  //Model popup's
  openSubItemPopup() {
    this.isSubItem = true;
    this.itemPath = "";
    this.getPath(this.selectedNode);
    this.isAddSubmitted = false;
    this.addForm.reset();
    this.openSubItempopup.nativeElement.click();
  }

  closeAddItem() {
    this.title = "";
    this.closeAddItemPopup.nativeElement.click();
  }

  showRenamePopup() {
    this.itemPath = "";
    this.name = this.selectedNode.name;
    this.renameCopy = this.name;
    this.getPath(this.selectedNode);
    this.openRenameItempopup.nativeElement.click();
  }

  closeRenamePopUp() {
    this.title = "";
    this.closeRenameItemPopup.nativeElement.click();
  }

  //Common Methods
  expandCollapseTree() {
    this.isExpand = !this.isExpand;
    this.itemsList.forEach(node => {
      this.expandRecursive(node, this.isExpand);
    });
  }

  private expandRecursive(node: TreeNode, isExpand: boolean) {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach(childNode => {
        this.expandRecursive(childNode, isExpand);
      });
    }
  }

  insertNewItem(newCategoryId) {
    const item = new TreeItem();
    item.name = this.title;
    item.parentId = 0;
    item.id = newCategoryId;
    item.label = this.title;
    item.key = newCategoryId.toString();
    this.selectedItem = item;
    this.itemsList.push(item);
    this.getSelected.emit({ selectedFile: this.selectedItem });
    this.itemsList = _.orderBy(this.itemsList, [item => item.name.toLowerCase()], ['asc']);
    this.closeAddItem();
  }

  insertSubItem(newCategoryId) {
    const subItem = new TreeItem();
    subItem.name = this.title;
    subItem.parentId = this.selectedNode.id;
    subItem.id = newCategoryId;
    subItem.parent = this.selectedNode;
    subItem.label = this.title;
    subItem.key = newCategoryId.toString();
    this.selectedItem = subItem;
    this.selectedNode.children.push(subItem);
    this.expandRecursive(this.selectedNode, true);
    this.selectedNode.children = _.orderBy(this.selectedNode.children, [item => item.name.toLowerCase()], ['asc']);
    this.getSelected.emit({ selectedFile: this.selectedItem });
    this.closeAddItem();
  }

  modifyItemName() {
    this.selectedNode.name = this.name;
    if (this.selectedNode.parentId == 0) {
      this.itemsList = _.orderBy(this.itemsList, [item => item.name.toLowerCase()], ['asc']);
    }
    else {
      this.selectedNode.parent.children = _.orderBy(this.selectedNode.parent.children, [item => item.name.toLowerCase()], ['asc']);
    }
    this.closeRenamePopUp();
  }

  removeItem() {
    if (this.selectedNode && this.selectedNode.parent) {
      const index = this.selectedNode.parent.children.indexOf(this.selectedNode);
      this.selectedNode.parent.children.splice(index, 1);
    }
    else {
      const index = this.itemsList.indexOf(this.selectedNode);
      this.itemsList.splice(index, 1);
    }
  }

  expandItem() {
    this.expandRecursive(this.selectedNode, true);
  }

  addNewItem() {
    this.addItem.emit({ categoryTitle: this.title });
  }

  addChildItem() {
    this.addSubItem.emit({ categoryTitle: this.title, parentId: this.selectedNode.id });
  }

  updateItemName() {
    this.renameItem.emit({ existingName: this.selectedNode.name, id: this.selectedNode.id, name: this.name, parentId: util.isValidValue(this.selectedNode.parent) ? this.selectedNode.parent.id : 0 });
  }

  deleteSelectedItem() {
    var message ='SWAL_TITLE_ARE_YOU_SURE';
    switch (this.componentType) {
      case ComponentType.QuestionBank:
        message = 'DELETE_CATEGORY';
        break;
      case ComponentType.Questionnaire:
        message = 'DELETE_FOLDER';
        break;
    }
    swal.fire(message, 'DELETE_CHILD_FOLDERS').then((result) => {
      if (result) {
        this.deleteItem.emit({ name: this.selectedNode.name, id: this.selectedNode.id, children: this.selectedNode.children });
      }
    });
  }

  nodeSelect() {
    this.itemPath = '';
    this.getPath(this.selectedItem)
    this.getSelected.emit({ selectedFile: this.selectedItem, selectedPath: this.itemPath });
  }

  showMenu(isRightClick) {
    if (isRightClick) {
      this.selectedNode = this.selectedItem;
    }
    if (!this.showContextMenu)
      this.cm.hide();
    else
      this.cm.show();
  }

  getPath(item) {
    this.itemPath = item.name + " > " + this.itemPath;
    if (item.parentId > 0) {
      this.getPath(item.parent);
    }
    if (this.itemPath.charAt(this.itemPath.length - 2) === '>') {
      this.itemPath = this.itemPath.substr(0, this.itemPath.length - 2);
    }
  }

  setItemType() {
    switch (this.componentType) {
      case ComponentType.QuestionBank:
        this.itemType = ItemType.Category;
        break;
      case ComponentType.Questionnaire:
        this.itemType = ItemType.Folder;
        break;
    }
    this.filterPlaceHolder = "Search " + this.itemType;
    this.items = [
      { label: 'Add Sub ' + this.itemType, icon: 'fa fa-folder', command: (event) => this.openSubItemPopup() },
      { label: 'Rename', icon: 'fa fa-pencil-square-o', command: (event) => this.showRenamePopup() },
      { label: 'Delete', icon: 'fa fa-trash-o', command: (event) => this.deleteSelectedItem() },
      { label: 'Expand All', icon: 'fa fa-expand', command: (event) => this.expandItem() }
    ];
  }

  setDefaultValues() {
    this.isSubItem = false;
    this.title = "";
    this.isAddSubmitted = false;
    this.addForm.reset();
  }

  validateAddItem() {
    this.isAddSubmitted = true;
    if (util.isValidString(this.title)) {
      this.isSubItem ? this.addChildItem() : this.addNewItem()
    }
  }

  disableRename() {
    if (util.isValidString(this.renameCopy))
      return (this.renameCopy.toLowerCase() == this.name.toLowerCase());
  }

}
