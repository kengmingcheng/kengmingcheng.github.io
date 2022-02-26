import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let navToggle = document.querySelector('.nav-toggle')!;
    let nav = document.querySelector('.nav')!;
    let navLinks = document.querySelectorAll('.nav-link')!;

    // navToggle.addEventListener('click', (event: any) =>{
    //     document.body.classList.toggle('nav-open');
    //     event.stopPropagation();
    // });

    // navLinks.forEach(link => {
    //     link.addEventListener('click', () =>  {
    //         document.body.classList.remove('nav-open');
    //     });
        
    // });
 
    document.addEventListener('click', function(event: Event){
      if (isVisible(event) && !(event.target as Element).className.startsWith('nav')) {
        document.body.classList.remove('nav-open');
      }
    });

    // document.addEventListener('click', function(event: Event){
    //   console.log((event.target as Element).className);
    // });
  }

  expandSidebar(event : Event) : void {
    document.body.classList.toggle('nav-open');
    event.stopPropagation();
  }
  
}
const isVisible = (elem: any) => document.body.classList.contains('nav-open');
