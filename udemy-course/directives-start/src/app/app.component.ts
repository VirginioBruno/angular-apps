import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [1, 2, 3, 4, 5];
  onlyOdd = false;
  value = 400;

    onlyOdds() {
        this.onlyOdd = !this.onlyOdd;
        if (this.onlyOdd) {
            this.numbers.map((number: number, index) => {
                if (number % 2 == 0)
                    this.numbers.splice(index, index + 1);
            })
        } else {
            this.numbers = [1, 2, 3, 4, 5];
        }
    }
}
