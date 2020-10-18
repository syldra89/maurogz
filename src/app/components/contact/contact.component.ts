import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';
import { ContactService } from '../../services/contact.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ ContactService ] 
})
export class ContactComponent implements OnInit {

  public selectedLang: String;
	public page_title_en: String;
  public page_title_es: String;
	public contact: Contact;
  public sending;
	public status;

  constructor(private _contactService: ContactService, private _lang: AppComponent) { 
    this.selectedLang = this._lang.selectedLang;
  	this.page_title_en = 'Contact';
    this.page_title_es = 'Contacto';
  	this.contact = new Contact('','','');
  }

  ngOnInit() {

  }

   onSubmit(form){
    this.sending = 'true';
   	this._contactService.sendMessage(this.contact).subscribe(
  		response => {
  			if(response.status == 'success'){
  				this.status = response.status;
          this.status = 'success';
          this.sending = 'false';
  				form.reset();
  			}else{
  				this.status = 'error';
  			}
  		},
  		error => {
  			console.log(<any>error);
  		}
  	);
   }

}
