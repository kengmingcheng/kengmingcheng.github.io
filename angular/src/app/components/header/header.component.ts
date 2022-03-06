import { Component, ElementRef, OnInit, ViewEncapsulation, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  @ViewChild('toggleButton') static toggleButton: ElementRef;

  constructor(private renderer: Renderer2) { 

    this.renderer.listen('document', 'click', (event: Event) =>{
      if (isVisible(event) && !(event.target as Element).className.startsWith('nav')) {
        document.body.classList.remove('nav-open');
      }
    });
  }

  ngOnInit(): void {
  }

  expandSidebar(event : Event) : void {
    document.body.classList.toggle('nav-open');
    event.stopPropagation();
  }
  
}
const isVisible = (elem: any) => document.body.classList.contains('nav-open');
