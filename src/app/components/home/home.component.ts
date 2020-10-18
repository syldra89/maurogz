import { Component, OnInit } from '@angular/core';

import { global } from '../../services/global';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	
  public URL;
  public bannerDisable: Boolean;
	public carImg1;
 	public carImg2;
  public webDesignIcon;
  public selectedLang: String;
  
  constructor(private _lang: AppComponent) {
  	
    this.URL = global.url;
    this.carImg1 = 'assets/img/carousel/1.jpg';
    this.carImg2 = 'assets/img/carousel/2.jpg';
    this.webDesignIcon = 'assets/img/images/web-design.png';
    this.bannerDisable = true;
    this.selectedLang = this._lang.selectedLang;

  }

  ngOnInit() {
      
  }

}
