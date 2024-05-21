import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
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
  isDisabled: boolean = true;
  constructor(
    private formConstructor: FormBuilder,
    private formService: FormServiceService,
    private renderer: Renderer2
  ) {}

  @ViewChild('checkBox') mySelectBox!: ElementRef;

  @ViewChild('formBtn') myFormBtn!: ElementRef;

  ngOnInit(): void {
    this.infoOutput.emit('Ciao padre!');
  }

  mustBeChecked(event: Event) {
    if (this.checkoutForm.valid && this.mySelectBox.nativeElement.checked) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }

  subscribe(): void {
    const modal = document.getElementById('modal1');
    const modalError = document.getElementById('modal2');
    if (modal != null && this.checkoutForm.valid) {
      this.formService.insertLead(this.checkoutForm.value).subscribe();
      this.checkoutForm.reset();
      modal.style.display = 'block';
    } else {
      if (modalError != null) {
        modalError.style.display = 'block';
      }
    }
  }
  closeModal(): void {
    const modal = document.getElementById('modal1');
    if (modal != null) {
      modal.style.display = 'none';
    }
  }

  closeModalError(): void {
    const modalError = document.getElementById('modal2');
    if (modalError != null) {
      modalError.style.display = 'none';
    }
  }
  onSubmit() {
    this.submittedValue.value = this.checkoutForm.value;
  }
}
