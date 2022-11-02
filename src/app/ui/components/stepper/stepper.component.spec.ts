import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RemoteGatewayFactory } from '../../gateways/remote-gateway-factory';
import { ClientParser } from '../../repositories/parser/client.parser';
import { HomeService } from '../../services/home.service';

import { StepperComponent } from './stepper.component';

describe('StepperComponent', () => {
  let component: StepperComponent;
  let fixture: ComponentFixture<StepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [StepperComponent],
      providers: [
        HomeService,
        ClientParser,
        RemoteGatewayFactory,
        HttpClient,
        HttpHandler,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(StepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
