import { Component } from '@angular/core';

@Component({
  selector: 'app-signal-detail',
  standalone: false,

  templateUrl: './signal-detail.component.html',
  styleUrl: './signal-detail.component.scss'
})
export class SignalDetailComponent {
  public htmlSnippet: string = `
    <ul>
      <li *ngFor="let item of items">
        {{item.name}} - $ {{ item.price }}
        <button (click)="removeItem(item)">Remove</button>
      </li>
    </ul>
    Total Price: $ {{ totalPrice() }}
`;

  public tsSnippet: string = `
    items = [    { name: 'Product A', price: 10 },    { name: 'Product B', price: 15 },    { name: 'Product C', price: 20 },  ];

    // Define a signal for the list of items
    itemList = signal(this.items);
  
    // Define a computed value for the total price
    totalPrice = computed(() => {
      return this.itemList().reduce((acc, curr) => acc + curr.price, 0);
    });
  
    removeItem(item) {
      // Update the itemList signal by removing the selected item
      this.itemList.set(this.itemList().filter((i) => i !== item));
    }
  `
}
