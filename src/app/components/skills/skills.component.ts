import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
	public page_title_en: String;
	constructor() { 
		this.page_title_en = 'Conocimientos';

	}

	ngOnInit() {
	}

}
