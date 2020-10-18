import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'mauro-gz';
	
	public defaultLang: String;
	public selectedLang: String;
	public storedLang: String;
	public es = 'es';

	constructor(private router: Router, private titleService: Title) { 

		titleService.setTitle('Mauro Gomez | Full Stack Developer');
		this.storedLang = localStorage.getItem('mgz-lang');
		this.defaultLang = navigator.language;
	}

	ngOnInit() {
	    this.router.events.subscribe((evt) => {
	        if (!(evt instanceof NavigationEnd)) {
	            return;
	        }
	        window.scrollTo(0, 0)
	    });
	    //------------------
	    
	    if(this.storedLang == null || undefined){
	    	if(!this.defaultLang.includes(this.es)){
				localStorage.setItem('mgz-lang', 'EN');
				this.selectedLang = localStorage.getItem('mgz-lang');
		    }
		    else{
				localStorage.setItem('mgz-lang', 'ES');
				this.selectedLang = localStorage.getItem('mgz-lang');
		    }
	    }
	    else{
	    	this.selectedLang = localStorage.getItem('mgz-lang');
	    }
	    

	}

	changeEs(){
		localStorage.setItem('mgz-lang', 'ES');
	    this.selectedLang = 'ES';
	    window.location.reload();
	}
	changeEn(){
		localStorage.setItem('mgz-lang', 'EN');
	    this.selectedLang = 'EN';
	    window.location.reload();
	}
}
