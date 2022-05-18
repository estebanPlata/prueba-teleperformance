import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/share/services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  data:any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.dataService.getData().subscribe((res)=>{
      console.log(res);
    })
  }
}
