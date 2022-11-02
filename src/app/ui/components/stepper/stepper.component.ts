import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Client } from '../../models/client/client';
import { MyErrorStateMatcher } from '../../models/error-state-matcher/error-state-matcher';
import { MaskInput } from '../../models/masks/mask.model';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  @Output() results = new EventEmitter();

  firstFormGroup = this._formBuilder.group({
    socialNumber: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    fourthCtrl: ['', Validators.required],
  });

  public matcher = new MyErrorStateMatcher();
  public socialNumberMask = MaskInput.getSocialNumberMask();
  public client: Client = new Client();

  constructor(
    private _formBuilder: FormBuilder,
    private homeService: HomeService
  ) {}

  ngOnInit(): void {}

  onPressEnter(event: any): void {
    if (event.key === 'Enter') this.findSocialNumber();
  }

  public async findSocialNumber(): Promise<void> {
    const socialNumber = this.firstFormGroup.get('socialNumber')?.getRawValue();
    try {
      let result = await this.homeService.findPerson(socialNumber);
      this.client = result;
    } catch (error) {
      throw error;
    }
  }

  haveResults(): boolean {
    if (!this.client.getSocialNumber()) {
      return false;
    }
    this.results.emit(true);
    return true;
  }
}
