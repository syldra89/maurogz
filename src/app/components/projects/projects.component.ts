import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

	public page_title_en: String;
	public page_title_es: String;
	public selectedLang: String;

	constructor(private _lang: AppComponent) { 
		this.selectedLang = this._lang.selectedLang;
		this.page_title_en = 'Portfolio';
		this.page_title_es = 'Proyectos';
	}

	ngOnInit() {
	}

}
