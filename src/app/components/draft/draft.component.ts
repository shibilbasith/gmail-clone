import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent implements OnInit {

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
    const localData = localStorage.getItem('draftObject');
    if(localData != null){
      this.draftItemArray = JSON.parse(localData)
    }
  }


    //delete
    onDelete(index:any){

      let ind = this.draftItemArray.indexOf(this.draftItemArray[index]);
      if (ind > -1){
        this.draftItemArray.splice(ind, 1);
      }
    localStorage.setItem("draftObject", JSON.stringify(this.draftItemArray));
    }
    

     //edit
  // onEdit(item: any) {
  //   this.inboxObj = item;
  // }



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




}
