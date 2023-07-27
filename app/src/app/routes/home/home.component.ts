import { Component } from '@angular/core';
import { ImportJsService } from '../../service/Import-js/import-js.service';

interface GalleryIcon{
    id: number,
    name: string,
    icon: string
}

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [ ImportJsService ]
})
export class HomeComponent {

    constructor(private _CarouselJSService: ImportJsService)
    {
        _CarouselJSService.Carga(["Carousel/carousel"]);
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
