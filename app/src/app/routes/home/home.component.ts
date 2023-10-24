import { Component } from '@angular/core';
import { ImportJsService } from '../../service/Import-js/import-js.service';
import { MusicosApiService } from '../../service/api/musicos-api.service';

interface GalleryIcon{
    id: number,
    name: string,
    icon: string
}

interface Album {
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
    topGenres: Album[] = [];

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
        this.musicosApiService.principalesGeneros().subscribe(_principalesGeneros => { this.topGenres = _principalesGeneros.albumes });
    }

    generosIcon: GalleryIcon[] = [
        {
            id: 1,
            name: "electronica",
            icon: "electronica.png"
        },
        {
            id: 2,
            name: "pop",
            icon: "pop.png"
        },
        {
            id: 3,
            name: "rock",
            icon: "rock.png"
        },
        {
            id: 4,
            name: "hiphop",
            icon: "hiphop.png"
        },
        {
            id: 5,
            name: "jazz",
            icon: "jazz.png"
        }
    ];

    vendidosIcon: GalleryIcon[] = [
        {
            id: 1,
            name: "electronica",
            icon: "lemons.png"
        },
        {
            id: 2,
            name: "pop",
            icon: "sour.png"
        },
        {
            id: 3,
            name: "rock",
            icon: "backInBlack.png"
        },
        {
            id: 4,
            name: "hiphop",
            icon: "myBeautifulDarkTwistedFantasy.png"
        },
        {
            id: 5,
            name: "jazz",
            icon: "kindOfBlue.png"
        }
    ];
}
