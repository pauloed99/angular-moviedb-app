import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  //Default and reset font size
  font_size = 16;

  //Increase, decrease and set default font size
  setFontSize(idd: string) {
    
    //calc font size
    if(idd === 'a+'){
      this.font_size += 1;
    } else if(idd === 'a-') {
      this.font_size -= 1;
    } else {
      this.font_size = 16;
    }
    
    //set font size
    let htmlRoot:HTMLElement = <HTMLElement> document.getElementsByTagName("html")[0];
    if (htmlRoot != null) {
       htmlRoot.style.fontSize = `${this.font_size}px`;
    }
  }
}
