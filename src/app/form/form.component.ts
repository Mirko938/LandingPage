import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormServiceService } from '../form-service.service';
import { FloatLabelModule } from 'primeng/floatlabel';
import { Figlio } from '../Interface/figlio';
import { Form } from '../Interface/form';
import { CommonModule } from '@angular/common';

function mustBecheckedValidator(): ValidatorFn {
  return (control: AbstractControl): { [key:string]: any } | null => {
    return control.value ? null : { notChecked: { value: control.value }};
  };
}

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    FloatLabelModule,
    CommonModule,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})


export class FormComponent implements OnInit {
  @Input()
  figlio!: Figlio;

  @Output()
  infoOutput: EventEmitter<any> = new EventEmitter<any>();

  submittedValue: any;

  checkoutForm: FormGroup = this.formConstructor.group({
    nome: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    telefono: new FormControl(null, [
      Validators.required,
      Validators.minLength(10),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    checkedBox: new FormControl(false, mustBecheckedValidator()),
  });


  items: Form[] = [
    {
      nome: 'Mario Rossi',
      label: 'Full Name',
      control: 'nome',
    },
    {
      nome: '+39',
      label: 'Phone',
      control: 'telefono',
    },
    {
      nome: 'mariorossi@gmail.com',
      label: 'E-mail',
      control: 'email',
    },
  ];

  constructor(
    private formConstructor: FormBuilder,
    private formService: FormServiceService
  ) {

  }

  ngOnInit(): void {
    this.infoOutput.emit('Ciao padre!');
  }
  subscribe(): void {
    this.formService.insertLead(this.checkoutForm.value).subscribe();
    this.checkoutForm.reset();
    const modal = document.getElementById('modal1');
    if (modal != null) {
      modal.style.display = 'block';
    }
  }
  closeModal(): void {
    const modal = document.getElementById('modal1');
    if (modal != null) {
      modal.style.display = 'none';
    }
  }
  onSubmit() {
    this.submittedValue.value = this.checkoutForm.value
  }
}
