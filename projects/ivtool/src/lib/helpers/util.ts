import * as _ from 'lodash';

// import { NgxUiLoaderConfig } from 'ngx-ui-loader';

var emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
var guidRegex = new RegExp(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/);

export function isValidValue(value) {
  return (!_.isUndefined(value) && !_.isNull(value));
}

export function isValidString(value) {
  return (isValidValue(value) && !_.isEmpty(value));
}

export function isValidPositiveNumber(value) {
  return (isValidValue(value) && value > 0);
}

export function isValidEmail(value) {
  return emailRegex.test(value);
}




export function getActiveStatusList() {
  return [
    {
      isActive: true,
      status: 'Active'
    },
    {
      isActive: false,
      status: 'Deleted'
    }
  ];
}


export function validateFile(fileName, fileSize, permittedFiles, fileMaxSize) {
  var fileStatus = 0;
  var permittedFilesArray = permittedFiles.toLowerCase().split(",");
  var extension = fileName.substring(fileName.lastIndexOf("."));
  if ((permittedFilesArray.indexOf("*.*") === -1) && permittedFilesArray.indexOf(extension.toLowerCase()) === -1) {
    return fileStatus = 1;
  }
  else if (fileSize > fileMaxSize) {
    return fileStatus = 2;
  }
  else {
    return fileStatus = 0;
  }
}
// export function loaderConfig() {
//   const ngxUiLoaderConfig: NgxUiLoaderConfig = {
//     "bgsColor": "red",
//     "bgsOpacity": 0.5,
//     "bgsPosition": "center-center",
//     "bgsSize": 60,
//     "bgsType": "three-strings",
//     "blur": 5,
//     "fgsColor": "#3975a2",
//     "fgsPosition": "center-center",
//     "fgsSize": 40,
//     "fgsType": "three-strings",
//     "gap": 24,
//     "logoPosition": "center-center",
//     "logoSize": 120,
//     "logoUrl": "",
//     "masterLoaderId": "master",
//     "overlayBorderRadius": "0",
//     "overlayColor": "rgba(250,250,250,0.5)",
//     "pbColor": "red",
//     "pbDirection": "ltr",
//     "pbThickness": 3,
//     "hasProgressBar": false,
//     "text": "",
//     "textColor": "#FFFFFF",
//     "textPosition": "center-center",
//   };
//   return ngxUiLoaderConfig;
// }

export function isCurrentNodeParentDeleted(deletedNodeChildren: any, currentFolderId) {
  let isDeleted = false;
  for (const node of deletedNodeChildren) {
    if (node.id == currentFolderId) {
      isDeleted = true;
      break;
    }
    if (node.children) {
      this.isCurrentNodeParentDeleted(node.children);
    }
  }
  return isDeleted;
}

export function isValidGuid(value) {
  return guidRegex.test(value);
}
