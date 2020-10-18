import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

	public page_title_en: String;
	public page_title_es: String;
	public selectedLang: String;

	constructor(private _lang: AppComponent) { 
		this.selectedLang = this._lang.selectedLang;
		this.page_title_en = 'Services';
		this.page_title_es = 'Servicios';
	}

	ngOnInit() {
	}

}
