import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private routes: ActivatedRoute
    ){ }

    name: any;

  ngOnInit(): void {
    this.routes.queryParamMap.subscribe (
      (data: any) => {
        console.log('dataa', data);
        this.name = data.params.name ?? '';
      }
    );
  }

}
