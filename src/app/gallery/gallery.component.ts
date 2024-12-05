@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  paintings = [
    { title: 'Starry Night', image: 'assets/starry-night.jpg', description: 'A depiction of the view from Van Gogh\'s asylum room.' },
    { title: 'Sunflowers', image: 'assets/sunflowers.jpg', description: 'A series of paintings showing bright yellow sunflowers.' },
    { title: 'The Bedroom', image: 'assets/the-bedroom.jpg', description: 'Van Gogh\'s bedroom in Arles, painted with bold colors.' }
  ];
}

import { Component } from '@angular/core';
