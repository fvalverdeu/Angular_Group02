import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appPromesasObservables';

  executeCallAPI() {
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status ===200) {
        console.log(this.responseText);
      }

    };
    xhttp.open('GET', 'https://jsonplaceholder.typicode.com/posts',true);
    xhttp.send();
  }
}
