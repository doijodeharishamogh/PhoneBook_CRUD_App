import { Component, OnInit } from '@angular/core';

import {Observable,fromEvent} from 'rxjs';

@Component({
  selector: 'app-post-module',
  templateUrl: './post-module.component.html',
  styleUrls: ['./post-module.component.scss']
})
export class PostModuleComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() {

    this.onload();
  }

  onload = function(){
    // Buttons
      var quickAddBtn = document.getElementById('QuickAdd');
      var quickAddFormDiv = <HTMLFormElement>document.querySelector('.quickaddForm')
      var cancelBtn = document.getElementById('Cancel');
      var addBtn = document.getElementById('Add');
      
      var name=(<HTMLInputElement>document.getElementById('name')).value;
      var phone=(<HTMLInputElement>document.getElementById('phone')).value;
      var address=(<HTMLInputElement>document.getElementById('address')).value;
      var email=(<HTMLInputElement>document.getElementById('email')).value;
    
    quickAddBtn.addEventListener("click", function(){
      // display the form div
      quickAddFormDiv.style.display = "block";
    });
  
    cancelBtn.addEventListener("click", function(){
          quickAddFormDiv.style.display = "none";
         
      });

var qs = require("qs");
let addBook = document.getElementById('Add');
const addBookEvent = fromEvent(addBook,'click');
addBookEvent.subscribe(save);


let url = "http://localhost:8080";

function postData(url = `http://localhost:8080`, data) {
    console.log(data);
    // Default options are marked with *
    return fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "no-cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Accept":"application/x-www-form-urlencoded",
            //"Content-Type": "application/json",
             "Content-Type": "application/x-www-form-urlencoded",
            //'Content-Type': 'text/plain'
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: qs.stringify(data), // body data type must match "Content-Type" header
    })
    .then(response => console.log(response) ); // parses JSON response into native Javascript objects 
}

/**
 * @function save
 * @param {*} value 
 */
function save(event){
    let data = [];
    let d1={};
    let formDetails = document.querySelectorAll(".formFields");
    formDetails.forEach((element) => {
        
        if(element.id === "name"){
            d1['name'] = (<HTMLInputElement>document.getElementById('name')).value;
        }
        else if(element.id === "phone"){
            d1['phone'] = (<HTMLInputElement>document.getElementById('phone')).value;
        }
        else if(element.id === "address"){
            d1['address'] = (<HTMLInputElement>document.getElementById('address')).value;
        }
        else{
            d1['email'] = (<HTMLInputElement>document.getElementById('email')).value;
        }
        
    });
    data.push(d1);
    console.log(JSON.stringify(data));
    postData(url + "/contacts",d1);
    //clearForm();
}

// function error(event){
//     console.log("Error: " + value);
    
// }

// function complete(event){
//     console.log("Complete: " + value);
// }

// function clearForm(){
//   var formFields = document.querySelectorAll('.formFields');
//   for(var i in formFields){
//       formFields[i].value = '';
//   }
// }
  
      // email.addEventListener('keyup', function (event) {
      //     isValidEmail = email.checkValidity();
      //     if ( isEmailValid ) {
      //         addBtn.disabled = false;
      //       } else {
      //         addBtn.disabled = true;
      //       }
      //   });
  
      //   name.addEventListener('keyup', function (event) {
      //     isValidName = name.checkValidity();
      //     if ( isValidName ) {
      //         addBtn.disabled = false;
      //       } else {
      //         addBtn.disabled = true;
      //       }
      //   });
      //   address.addEventListener('keyup', function (event) {
      //     isValidName = address.checkValidity();
      //     if ( isValidAddress ) {
      //         addBtn.disabled = false;
      //       } else {
      //         addBtn.disabled = true;
      //       }
      //   });
  
      //   phone.addEventListener('keyup', function (event) {
      //     isValidPhone = phone.checkValidity();
      //     if ( isValidPhone ) {
      //         addBtn.disabled = false;
      //       } else {
      //         addBtn.disabled = true;
      //       }
      //   });
  
  
        
  }


}
