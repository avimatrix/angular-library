export class TreeItem {
  id: number = 0;
  parentId: number;
  name: string;
  children: TreeItem[] = [];
  expandedIcon = "pi pi-folder-open";
  collapsedIcon = "pi pi-folder";
  parent: any;
  label: string;
  key: string;
}

export class TreeTypeRequest {
  componentType: number;
  isTreeDropDown: boolean;
}


