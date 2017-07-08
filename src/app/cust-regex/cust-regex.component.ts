import { Component, OnInit } from '@angular/core';
import * as Clipboard from 'clipboard';

import {MdButtonModule} from '@angular/material';
import {MdCheckboxModule} from '@angular/material';
import {MdIconModule} from '@angular/material';


@Component({
  selector: 'app-cust-regex',
  templateUrl: './cust-regex.component.html',
  styleUrls: ['./cust-regex.component.scss']
})
export class CustRegexComponent implements OnInit {

  lanStyle: String;
  strI: String;
  strO: String;
  cb: Clipboard;

  constructor() { }

  ngOnInit() {
    this.cb = new Clipboard('.btn');
    this.lanStyle = "alphabet"; //default to English
  }

  removeWhiteSpace(): void{
    if (this.lanStyle === "alphabet"){
      this.strO = this.strI.replace(/\s\s+/g, ' ');
    } else if (this.lanStyle === "character"){
      this.strO = this.strI.replace(/\s/g, '');
    } else {

    }
    //common punctuation not followed by punctuation
    this.strO = this.strO.replace(/(,|\.|:|!|\?)^(,|\.|:|!|\?|"|'|\)|\]|\})/g, '$1 ');
  } 

  reset(): void{
    this.strI = "";
    this.strO = "";
  }
}
