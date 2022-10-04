import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  public listdeVideos:Array<any> = []
  constructor() { }

  ngOnInit(): void {
  
    this.listdeVideos = [
      {
        title: "Video 1",
        subtitle: "Subtitle video 1",
        img: "https://i.ytimg.com/vi/73ccl96-pl8/hq720_live.jpg?sqp=CJzi8ZkG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDfleu54KKxTrq4xTXsOzjMUEQYuA"
      },
      {
        title: "Video 2",
        subtitle: "Subtitle video 2",
        img: "https://i.ytimg.com/vi/74R8aypl9bA/hq720_live.jpg?sqp=CJzi8ZkG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNFUYDoVG5On2ya84zRWGlGp9eig"

      },
      {
        title: "Video 3",
        subtitle: "Subtitle video 3",
        img: "https://i.ytimg.com/vi/nMHbNoCMb68/hq720_live.jpg?sqp=CKz-8ZkG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBvs0DxEgLEDU_n-7bKTAOTqRXRdA"

      }
    ]

  }

}
