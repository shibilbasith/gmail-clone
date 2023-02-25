import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  //fetch from local storage and store as an array

  inboxItemArray: any[] = []; 
  draftItemArray: any[] = []; 
  //add to local storage
  inboxObj:any = {
    from: '',
    to: '',
    subject: '',
    message: ''
  };

  constructor() { }

  ngOnInit(): void {
    const localData = localStorage.getItem('inboxObject');
    if(localData != null){
      this.inboxItemArray = JSON.parse(localData)
    }
  }

  onItemAdd(){
    this.inboxItemArray.push(this.inboxObj);
    localStorage.setItem('inboxObject',JSON.stringify(this.inboxItemArray))
    this.inboxObj = {
      from: '',
      to: '',
      subject: '',
      message: ''

    };
  }

  //if we click draft //it stores in diff address name

  onItemDraft(){
    this.draftItemArray.push(this.inboxObj);
    localStorage.setItem('draftObject',JSON.stringify(this.draftItemArray))
    //initialise the obj again to remove current text field inputs
    this.inboxObj = {
      from: '',
      to: '',
      subject: '',
      message: ''
    };
  }

  //edit
  // onEdit(item: any) {
  //   this.inboxObj = item;
  // }


  //delete
  onDelete(index:any){

    let ind = this.inboxItemArray.indexOf(this.inboxItemArray[index]);
    if (ind > -1){
      this.inboxItemArray.splice(ind, 1);
    }
  localStorage.setItem("inboxObject", JSON.stringify(this.inboxItemArray));
  }


}
