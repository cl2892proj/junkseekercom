import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
/*Material Design and Flex Layout*/
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {

  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let inArea: any;
  let outArea: any;
  let cvtBtn: any;

  //async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
      ],
    }).compileComponents(); //compile template and css 
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent); 
    app = fixture.debugElement.componentInstance; //appComponent test instance
    inArea = fixture.debugElement.query(By.css('#area1')).nativeElement; //find inputArea
    outArea = fixture.debugElement.query(By.css('#area2')).nativeElement; //find outputArea
    cvtBtn = fixture.debugElement.query(By.css('#convertBtn')); //find the convert button 
  });

  it('initial selection', async(() => {
    fixture.detectChanges();
    expect(app.alphabetOrChar).toBe('alphabet');
    expect(app.linebreaksToSpaceYesNo).toBe('yes');
    expect(app.whiteSpaceToSpaceYesNo).toBe('yes');
    expect(app.consecutiveSpacetoOneYesNo).toBe('yes');
    expect(app.punctuationSpacingYesNo).toBe('yes');
  }));


  it('no selection no change to text', async(() => {
    fixture.detectChanges(); 
    app.linebreaksToSpaceYesNo = 'no';
    app.whiteSpaceToSpaceYesNo = 'no';
    app.consecutiveSpacetoOneYesNo = 'no';
    app.punctuationSpacingYesNo = 'no';

    app.strI = `a
                 ll       b!?`;
    app.removeWhiteSpace(); 
    expect(app.strO).toBe(app.strI);
  }));

  it('turn consecutive white spaces to a single space', async(() => {
    fixture.detectChanges();
    app.linebreaksToSpaceYesNo = 'no';
    app.whiteSpaceToSpaceYesNo = 'no';
    app.consecutiveSpacetoOneYesNo = 'yes';
    app.punctuationSpacingYesNo = 'no';

    app.strI = 
`The\t  \tquick\t\tbrown fox jumps over the\t\nlazy\tdog.`;
    app.removeWhiteSpace();
    expect(app.strO).toBe(`The quick brown fox jumps over the lazy dog.`);
  }));

  it('turn line breaks to space', async(() => {
    fixture.detectChanges();
    app.linebreaksToSpaceYesNo = 'yes';
    app.whiteSpaceToSpaceYesNo = 'no';
    app.consecutiveSpacetoOneYesNo = 'no';
    app.punctuationSpacingYesNo = 'no';

    app.strI = 
`Victory is\nreserved for those\nwilling\nto pay its price.\n--Sun Tzu`;

    app.removeWhiteSpace();
    expect(app.strO).toBe(`Victory is reserved for those willing to pay its price. --Sun Tzu`);
  }));

  it('turn all white space characters to space character', async(() => {
    fixture.detectChanges();
    app.linebreaksToSpaceYesNo = 'no';
    app.whiteSpaceToSpaceYesNo = 'yes';
    app.consecutiveSpacetoOneYesNo = 'no';
    app.punctuationSpacingYesNo = 'no';

    app.strI = 
`Judgea\tman\tby his\tquestions\nrather\tthan his answers.\nVoltaire`;

    app.removeWhiteSpace();
    expect(app.strO).toBe(`Judgea man by his questions rather than his answers. Voltaire`);
  }));

  it('punctuation test 1: period next to hyphen', async(() => {
    fixture.detectChanges();
    app.linebreaksToSpaceYesNo = 'no';
    app.whiteSpaceToSpaceYesNo = 'no';
    app.consecutiveSpacetoOneYesNo = 'no';
    app.punctuationSpacingYesNo = 'yes';

    app.strI = 
`when you learn to live for others, they will live for you.-Paramahansa Yogananda`;

    app.removeWhiteSpace();
    expect(app.strO).toBe(`when you learn to live for others, they will live for you. -Paramahansa Yogananda`);
  }));

  it('punctuation test 2: consecutive space, consecutive hypen and space after period', async(() => {
    fixture.detectChanges();
    app.linebreaksToSpaceYesNo = 'no';
    app.whiteSpaceToSpaceYesNo = 'no';
    app.consecutiveSpacetoOneYesNo = 'no';
    app.punctuationSpacingYesNo = 'yes';

    app.strI = 
`When a man is wrong and won ' t admit it,he always becomes angry. - -Thomas Haliburton`;
    app.removeWhiteSpace();
    expect(app.strO).toBe(`When a man is wrong and won't admit it, he always becomes angry. --Thomas Haliburton`);
  }));

  

});
