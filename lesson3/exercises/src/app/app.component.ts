import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';

  takeoffEnabled = true;
  gutterCheck(width, height){
    if((width > 260000 || width < 0 || height > 360000 || height < 0)){
      this.color = "orange";
    }else{
      this.color = "blue";
    }
  }

  moveRocket(rocketImage, direction){
    if(direction === "right"){
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
    }else if(direction === "left"){
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
    }else if(direction === "down"){
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height -10000;
    }else if(direction === "up"){
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height +10000;
    }
    this.gutterCheck(this.width,this.height);
  }

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.message = 'Shuttle in flight.';

       this.takeoffEnabled = true;
    }
 }
 handleLand(rocketImage) {
  window.alert('Are you sure the shuttle is ready to land?');
  
     this.color = 'green';
     this.height = 0;
     this.width = 0;
     this.message = 'Shuttle is landed.';
     rocketImage.style.bottom = "0";
     rocketImage.style.left = "0";

     this.takeoffEnabled = false;
  }
  handleAbort() {
    let result = window.confirm('Are you sure you want to abort mission?');
    if (result) {
       this.color = 'red';
       this.height = 0;
       this.width = 0;
       this.message = 'Mission Abort.';

       this.takeoffEnabled = true;
    }
 }

}

