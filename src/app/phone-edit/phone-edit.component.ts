import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-phone-edit',
  templateUrl: './phone-edit.component.html',
  styleUrls: ['./phone-edit.component.css']
})
export class PhoneEditComponent implements OnInit {

  // tslint:disable-next-line:no-string-literal
  id = this.actvRoute.snapshot.params['id'];
  phoneData: any = {};

  constructor(private restApi: RestApiService,
              private actvRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.restApi.getPhone(this.id).subscribe((data: {}) => {
      this.phoneData = data;
    });
  }

  // tslint:disable-next-line:typedef
  updatePhone() {
    if (window.confirm(' na pewno ')) {
      this.restApi.updatePhone(this.id, this.phoneData).subscribe((data: {}) => {
        this.router.navigate(['/phone-list']);
      });
    }
  }

}
