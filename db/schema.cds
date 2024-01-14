using { managed } from '@sap/cds/common';
namespace sf.batch; 

entity Assignment : managed { 
  key ID : Integer;
  old: String;
  new: String;
  done: Boolean;  
  message: String;
}