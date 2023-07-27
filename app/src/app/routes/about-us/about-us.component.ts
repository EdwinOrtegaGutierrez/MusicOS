import { Component } from '@angular/core';
import { ReadJsonApiService } from 'src/app/service/json/read-json-api.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  data: any;

  constructor(private dataApiService: ReadJsonApiService){}

  ngOnInit(): void{
    this.getData();
  }

  getData(){ 
    this.dataApiService.getData().subscribe(data => {
      this.data = data
    });
  }
}
