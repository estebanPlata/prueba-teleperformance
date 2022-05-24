import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IRepos} from 'src/app/share/interface/chart.interface';
import { DataService } from 'src/app/share/services/data.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  dataUser:any;
  user:any
  /* repo:any = {}; */
  repo:IRepos[]=[];
  subscriptions:IRepos[]=[];

  login: string = '';
  name: string = '';
  userSearch: any;


  details: any = {};

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getData();
   }
  getData() {
    this.dataService.getData().subscribe((res) => {
      Object.entries(res).forEach(([key, value]) => {
        this.dataUser= value;
      });
    });
  }
  showDetails(value: any) {
    this.details = value;
    this.getRepos(this.details.login);
    this.getSuscriptions(this.details.login)
  }
  getRepos(value:string){
    this.dataService.getRepos(value).subscribe((res) => {
      this.repo=[];
      res.forEach(r=>this.repo.push(r));
      console.log(this.repo.length)
 })}
 getSuscriptions(value:string){
  this.dataService.getSuscriptions(value).subscribe((res) => {
    this.subscriptions=[];
    res.forEach(r=>this.subscriptions.push(r));
    console.log(this.subscriptions.length)
})}
}
