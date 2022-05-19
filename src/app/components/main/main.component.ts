import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/share/services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  dataUser:any;
  login:string = '';
  name:string = '';
  userSearch:any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.dataService.getData().subscribe((res)=>{
      this.dataUser = res
      })
  }
  search(){
    this.dataService.getDataName(this.name).subscribe((res)=>{
    })
  }
}
