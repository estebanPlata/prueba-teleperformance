import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { IOptions } from 'src/app/share/interface/chart.interface';
import { DataService } from 'src/app/share/services/data.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChartsComponent implements OnInit {
  /* @Input() */
  dataDad:number=2


  single:IOptions[]=[];

  constructor(private dataService:DataService) { }

  ngOnInit()  {
      this.getFollwers();
  }

  getFollwers(){
    this.dataService.getFollowers().subscribe((res=>{
      this.single=[];
      res.forEach(r=> this.single.push({
        name:'description',
        value:this.single.length+1
    }))
      /* this.dataDad = res.length */
      console.log(this.single)
    }))
  }


     /*  {
        "name": "Seguidores",
        "value":this.numOne.length
      }
      {
        "name": "repositorios",
        "value":67
      },
      {
        "name": "siguiendo",
        "value": 50
      },
      {
        "name": "suscriptores",
        "value": 72
      } */




  view: [number,number] = [300, 300];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  xAxisLabel = 'Country';
  showYAxisLabel = false;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
}
