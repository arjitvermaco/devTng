import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    
  constructor(private router: Router) { }

  ngOnInit() {
      this.router.events.subscribe((evt) => {
          if (!(evt instanceof NavigationEnd)) {
              return;
          }
          window.scrollTo(0, 0)
      });


      $('.bxslider').bxSlider({
        infiniteLoop: true,
        mode: 'fade',
        speed: 1200,
        auto: true,
        hideControlOnEnd: true,
        minSlides: 1,
        maxSlides: 1,
        slideMargin: 0
        });			
        
  }
}
