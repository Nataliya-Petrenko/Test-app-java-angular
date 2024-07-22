import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../api-service.service';

@Component({
  selector: 'app-my-standalone-component',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './my-standalone-component.component.html',
  styleUrls: ['./my-standalone-component.component.scss']
})
export class MyStandaloneComponent implements OnInit {

  data: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getData().subscribe(response => {
      this.data = response;
    });
  }

  sendData(): void {
    const dataToSend = { key: 'value' };
    this.apiService.postData(dataToSend).subscribe(response => {
      console.log('Data sent successfully', response);
    });
  }
}