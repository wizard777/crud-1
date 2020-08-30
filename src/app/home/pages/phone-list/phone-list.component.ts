import { Component, OnInit } from '@angular/core';
import { IPhone } from 'src/app/shared/i-phone';
import { RestApiService } from 'src/app/shared/rest-api.service';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {

  Phones: any = [];

  constructor(private restApi: RestApiService) { }

  ngOnInit(): void {
    this.loadPhones();
  }

  loadPhones(): any {
    return this.restApi.getPhones().subscribe((data: {}) => {
      this.Phones = data;
    });
  }

  deletePhone(id): any {
    if ( window.confirm('jestes pewny ?')){
this.restApi.deletePhone(id).subscribe(data => {
  // this.loadPhones();
});

    }
  }
}
