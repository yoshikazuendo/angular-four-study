import { Component, OnInit } from '@angular/core';
import { Heroine } from './-share/services/heroine';
import { HeroineService } from './-share/services/heroine.service';
@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    heroines: Heroine[] = [];
    constructor(private heroineService: HeroineService) {}
    ngOnInit(): void{
        this.heroineService.getHeroines()
        .then((heroines: Heroine[]) => this.heroines = heroines.slice(0, 4));
    }
}