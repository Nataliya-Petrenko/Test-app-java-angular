import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyStandaloneComponent } from './my-standalone-component/my-standalone-component.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyStandaloneComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-angular-app';
}

