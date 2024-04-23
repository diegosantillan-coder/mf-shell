import { Component } from '@angular/core';
import PubSub from 'pubsub-js';

export interface ICommonProduct {
  price: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'mf-shell';
  private _products: ICommonProduct[] = [];
  count = 0;

  ngOnInit() {
    PubSub.subscribe('products',(_message, data) => {
      this._products.push(data as unknown as ICommonProduct);
      this.count++;
      localStorage.setItem('products', JSON.stringify(this._products))
    })
  }
}
