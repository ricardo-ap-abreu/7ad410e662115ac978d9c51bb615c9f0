import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HomeComponent } from './ui/pages/home/home.component';
import { MainComponent } from './ui/pages/main/main.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    let fixture: ComponentFixture<AppComponent>;
    let debugElement: DebugElement;

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, MainComponent, HomeComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    debugElement = fixture.debugElement;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ailos'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ailos');
  });
});
