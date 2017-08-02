import { Component, OnInit, ViewChild } from '@angular/core';
import * as Clipboard from 'clipboard';

import { MdButtonModule, 
  MdCheckboxModule,
  MdIconModule,
  MdToolbarModule
} from '@angular/material';

//import {MdSidenav} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'Remove White Space from Text';
  alphabetOrChar: String;
  linebreaksToSpaceYesNo: String;
  whiteSpaceToSpaceYesNo: String;
  consecutiveSpacetoOneYesNo: String; 
  punctuationSpacingYesNo: String; 
  strI: String;
  strO: String;
  strT: String; //temporary string
  cb: Clipboard;
  //@ViewChild(MdSidenav) sidenav: MdSidenav;

  linebreakToSpaceExampleInput: String =
`Victory is\nreserved for those\nwilling\nto pay its price.\n--Sun Tzu`;
  linebreakToSpaceExampleOutput: String = 
`Victory is reserved for those willing to pay its price. --Sun Tzu`;

  whiteSpaceToSpaceExampleInput: String =
`Judge a\tman by his\nquestions\trather than\this answers. Voltaire`;
  whiteSpaceToSpaceExampleOutput: String = 
`Judge a man by his questions rather than his answers. Voltaire`;


  consecutiveSpacetoOneExampleInput: String =
`The\t  \tquick\t\tbrown fox jumps over the\t\nlazy\tdog.`;
  consecutiveSpacetoOneExampleOutput: String = 
`The quick brown fox jumps over the lazy dog.`;

  constructor() { }

  ngOnInit() {
    this.cb = new Clipboard('.btn');
    this.alphabetOrChar = "alphabet"; //default to English
    this.linebreaksToSpaceYesNo = "yes"; 
    this.whiteSpaceToSpaceYesNo = "yes"; 
    this.consecutiveSpacetoOneYesNo = "yes"; 
    this.punctuationSpacingYesNo = "yes";
  }

  removeWhiteSpace(): void{
    this.strT = this.strI; 

    if(this.punctuationSpacingYesNo === "yes"){
      //rule 2: no space on either side of a hyphen or apostrophe
      this.strT = this.strT.replace(/\s+(-|')\s+/g, '$1');
    }

    if(this.punctuationSpacingYesNo === "yes"){
      //rule 1: one space after those characters
      this.strT = this.strT.replace(/(,|\.|:|;|!|\?)\s*/g, '$1 ');
    }

    if(this.punctuationSpacingYesNo === "yes"){
      //rule 3: no space between those punctuations when they are next to each other: .|:|!|?|-;
      this.strT = this.strT.replace(/(\.|:|;|!|\?)\s+(\.|:|;|!|\?)/g, '$1$2');
    }

    if(this.linebreaksToSpaceYesNo === "yes"){
      this.strT = this.strT.replace(/\n/g, ' ');
    }

    if(this.whiteSpaceToSpaceYesNo === "yes"){
      this.strT = this.strT.replace(/\s/g, ' ');
    }

    if(this.consecutiveSpacetoOneYesNo === "yes"){
      this.strT = this.strT.replace(/\s{1,}/g, ' ');
    }



    //common punctuation not followed by punctuation
    //this.strO = this.strO.replace(/(,|\.|:|!|\?)^(,|\.|:|!|\?|"|'|\)|\]|\})/g, '$1 ');

    this.strO = this.strT;
  } 

  reset(): void{
    this.strI = "";
    this.strO = "";
  }
}