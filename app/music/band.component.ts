import { Component, OnInit } from 'angular2/core';

import { BandsService } from '../service/bands.service';
import { Band } from '../entity/band';
import { RouteParams } from 'angular2/router';


@Component({
    templateUrl: 'app/music/band.component.html',
    providers: [BandsService]
})
export class BandDetailsComponent implements OnInit {

    band: Band;
    bands_error: boolean = false;

    constructor(private _bandsService: BandsService, private _routeParams: RouteParams) { }

    ngOnInit() { this.getBand(this._routeParams.get('id')) }

    getBand(id: string) {
        this._bandsService.getBand(id).subscribe(
            data => { this.band = <Band> data },
            err => { this.bands_error = true }
        );
    }
}