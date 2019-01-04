import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'en1-myLibrary-lib',
  templateUrl: './en1-myLibrary-lib.component.html',
  styleUrls: ['./en1-myLibrary-lib.component.css']
})
export class MyLibraryLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nombre:string = "guillermo de mendoza";

}
