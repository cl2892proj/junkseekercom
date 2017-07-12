import { Component, OnInit, ViewChild } from '@angular/core';
import * as Clipboard from 'clipboard';

import {MdButtonModule} from '@angular/material';
import {MdCheckboxModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import {MdSidenav} from '@angular/material';

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
  @ViewChild(MdSidenav) sidenav: MdSidenav;

  linebreakToSpaceExampleInput: String =
    'The<br>quick<br>brown<br>fox jumps over<br>the<br>lazy<br>dog.';
  linebreakToSpaceExampleOutput: String = 
    'The quick brown fox jumps over the lazy dog.';

  whiteSpaceToSpaceExampleInput: String =
    'The<code>&#9;</code>quick<code>&#9;</code>brown<br>fox jumps over<code>&#9;</code>the<code>&#9;</code>lazy<br>dog.';
  whiteSpaceToSpaceExampleOutput: String = 
    'The quick brown fox jumps over the lazy dog.';


  consecutiveSpacetoOneExampleInput: String =
    'The<code>&#9;</code><code>&#9;</code><code>&#9;</code>quick<code>&#9;</code>brown<br><br><br>fox jumps over<code>&#9;</code><br>the<code>&#9;</code>lazy<br>dog.';
  consecutiveSpacetoOneExampleOutput: String = 
    'The quick brown fox jumps over the lazy dog.';


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
      //rule one: one space after those characters
      this.strT = this.strT.replace(/(,|\.|:|;|!|\?)/g, '$1 ')
    }

    if(this.linebreaksToSpaceYesNo === "yes"){
      this.strT = this.strT.replace(/\n/g, ' ')
    }

    if(this.whiteSpaceToSpaceYesNo === "yes"){
      this.strT = this.strT.replace(/\s/g, ' ')
    }

    if(this.consecutiveSpacetoOneYesNo === "yes"){
      this.strT = this.strT.replace(/\s{2,}/g, ' ')
    }

    if(this.punctuationSpacingYesNo === "yes"){
      //rule two: no space on either side of a hyphen
      this.strT = this.strT.replace(/\s+_\s+/g, '_')
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