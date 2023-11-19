import { Component } from '@angular/core';
import { ImportJsService } from '../../service/Import-js/import-js.service';
import { MusicosApiService } from '../../service/api/musicos-api.service';

interface Album {
    codigo_Album: number,
    titulo: string;
    genero: string;
    total_De_Ventas: string;
}

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [ ImportJsService ]
})
export class HomeComponent {

    // Variable que podras consumir en el HTML
    bestSellers: Album[] = [];
    topGeneres: Album[] = [];
    imageUrl: string = "http://localhost:5094/api/Images/getImage/";

    constructor(private _CarouselJSService: ImportJsService, private musicosApiService: MusicosApiService)
    {
        _CarouselJSService.Carga(["Carousel/carousel"]);
    }

    ngOnInit(): void{
        this.masVendidos();
        this.principalesGeneros();
    }

    masVendidos(){
        this.musicosApiService.masVendidos().subscribe(_masVendidos => { this.bestSellers = _masVendidos.albumes; });
    }

    principalesGeneros(){
        this.musicosApiService.principalesGeneros().subscribe(_principalesGeneros => { this.topGeneres = _principalesGeneros.albumes });
    }
}
