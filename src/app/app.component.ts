import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Graph5';
  itemsList = JSON.parse('[{"id":78,"parentId":0,"name":"aaa","expandedIcon":"pi pi-folder-open","collapsedIcon":"pi pi-folder","label":"aaa","expanded":false,"children":[{"id":83,"parentId":78,"name":"aaaaaaa","expandedIcon":"pi pi-folder-open","collapsedIcon":"pi pi-folder","label":"aaaaaaa","expanded":false,"children":[],"key":"83"},{"id":82,"parentId":78,"name":"bbbbbb","expandedIcon":"pi pi-folder-open","collapsedIcon":"pi pi-folder","label":"bbbbbb","expanded":false,"children":[],"key":"82"},{"id":84,"parentId":78,"name":"ccccccc","expandedIcon":"pi pi-folder-open","collapsedIcon":"pi pi-folder","label":"ccccccc","expanded":false,"children":[],"key":"84"}],"key":"78"},{"id":70,"parentId":0,"name":"Angular","expandedIcon":"pi pi-folder-open","collapsedIcon":"pi pi-folder","label":"Angular","expanded":false,"children":[],"key":"70"},{"id":81,"parentId":0,"name":"b2","expandedIcon":"pi pi-folder-open","collapsedIcon":"pi pi-folder","label":"b2","expanded":false,"children":[],"key":"81"},{"id":79,"parentId":0,"name":"bbb","expandedIcon":"pi pi-folder-open","collapsedIcon":"pi pi-folder","label":"bbb","expanded":false,"children":[],"key":"79"},{"id":71,"parentId":0,"name":"beginner","expandedIcon":"pi pi-folder-open","collapsedIcon":"pi pi-folder","label":"beginner","expanded":false,"children":[],"key":"71"},{"id":219,"parentId":0,"name":"Big Data","expandedIcon":"pi pi-folder-open","collapsedIcon":"pi pi-folder","label":"Big Data","expanded":false,"children":[],"key":"219"},{"id":86,"parentId":0,"name":"c2w","expandedIcon":"pi pi-folder-open","collapsedIcon":"pi pi-folder","label":"c2w","expanded":false,"children":[],"key":"86"},{"id":80,"parentId":0,"name":"ccc","expandedIcon":"pi pi-folder-open","collapsedIcon":"pi pi-folder","label":"ccc","expanded":false,"children":[],"key":"80"},{"id":85,"parentId":0,"name":"dddddd","expandedIcon":"pi pi-folder-open","collapsedIcon":"pi pi-folder","label":"dddddd","expanded":false,"children":[],"key":"85"},{"id":231,"parentId":0,"name":"Demo","expandedIcon":"pi pi-folder-open","collapsedIcon":"pi pi-folder","label":"Demo","expanded":false,"children":[],"key":"231"},{"id":232,"parentId":0,"name":"Interview Ques","expandedIcon":"pi pi-folder-open","collapsedIcon":"pi pi-folder","label":"Interview Ques","expanded":false,"children":[],"key":"232"}]');
  constructor() {
}
}

