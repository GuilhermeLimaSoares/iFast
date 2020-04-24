import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.scss']
})
export class CarousselComponent implements OnInit {
  currentIndex = 0;
  currentImage: string;
  imageArray = ['assets/wolf.jpg', 'assets/gamer.jpg', 'assets/sol.jpg'];

  constructor() {

  }

  ngOnInit(): void {
    this.currentImage = this.imageArray[0];
    this.changeCarousselImage();
  }

  changeCarousselImage() {
    let indexImage = 0;
    setInterval(() => {
      this.currentIndex = this.currentIndex < this.imageArray.length - 1 ? this.currentIndex + 1 : this.currentIndex = 0;
      this.currentImage = this.imageArray[this.currentIndex];
      console.log(this.currentImage);
    }, 5000);
  }

}
