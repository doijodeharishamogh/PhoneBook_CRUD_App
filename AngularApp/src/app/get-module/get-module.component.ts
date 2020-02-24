import { Component, OnInit } from '@angular/core';

import {Observable,fromEvent} from 'rxjs';

@Component({
  selector: 'app-get-module',
  templateUrl: './get-module.component.html',
  styleUrls: ['./get-module.component.scss']
})
export class GetModuleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      this.onload();
  }

onload = function(){

const documentEvent = fromEvent(window,'load');
documentEvent.subscribe(getDoc);

function getDoc(event){
    fetch('http://localhost:8080/contacts',
        { method: 'GET' })
      .then(function(response) {
        return response.json();
      })
      .then((data) => {
      let result = `<div class="entry">`;
      data.forEach((user) => {
        const {_id,name } = user
                result += `<button id="button2"  class = "viewcontactBtn" > 
                    Name : ${name}
                  <div id="${_id}" class="entry1">
                    Phone: <label></label> <br>
                    Address: <label ></label> <br>
                    Email: <label></label> <br>
                </div>
                </button>`;
                document.getElementById('contact-area').innerHTML = result;
                //console.log(result);

            });
       
      })
  .catch( error => console.error('error:', error) );

}

//To call toggle
document.body.addEventListener( 'click', function ( event ) {
  if( event.srcElement.id == 'button2' ) {
    toggle(event);
  }
} );


function toggle(e) {
  //console.log(e.target.className);
  if(e.target.className == "viewcontactBtn"){
  var ele=e.target.firstElementChild;
  var id=ele.id;

  fetch(
    `http://localhost:8080/contacts/${id}`,
    { method: 'GET' }
  )
  .then(function(response) {
    return response.json();
  })
  .then((data) => {
    var values=ele.children;
    values[0].innerHTML=data.phone;
    values[2].innerHTML=data.address;
    values[4].innerHTML=data.email;
    
  })
  .catch( error => console.error('error:', error) );
  
  }

  if(ele.style.display == "block") {
    ele.style.display = "none";
  }
    else {
    ele.style.display = "block";

  }
    

}

}
}
