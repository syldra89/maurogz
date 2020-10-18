import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

	public selectedLang: String;
	@Input() page_title_en;
	@Input() page_title_es;

	constructor(private _lang: AppComponent) { 

		this.selectedLang = this._lang.selectedLang;

	}

	ngOnInit() {
	}

}
