import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-phone-create',
  templateUrl: './phone-create.component.html',
  styleUrls: ['./phone-create.component.css'],
})
export class PhoneCreateComponent implements OnInit {
  @Input() phoneDetails = { name: 'name', desc: 'opis', price: 0, updated: 'updated' };

  constructor(private restApi: RestApiService, private router: Router) {}

  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  addPhone() {
    this.restApi.createPhone(this.phoneDetails).subscribe((data: {}) => {
      this.router.navigate(['/phones-list']);
    });
  }
}

// to zastosowac !!!
// <h3>
//     <a [title]="product.name + ' details'">
//       {{ product.name }}
//     </a>
//   </h3>
