import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

	public selectedLang: String;
	public page_title_en: String;
	public page_title_es: String;

	constructor(private _lang: AppComponent) { 
		this.selectedLang = this._lang.selectedLang;
		this.page_title_en = 'About';
		this.page_title_es = 'Acerca';
	}

	ngOnInit() {
	}

}
