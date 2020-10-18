import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

	public page_title_en: String;

	constructor() { 

		this.page_title_en= 'Cursos';
	}

	ngOnInit() {
	}

}
