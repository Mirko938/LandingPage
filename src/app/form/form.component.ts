import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormServiceService } from '../form-service.service';
import { FloatLabelModule } from 'primeng/floatlabel';
import { Figlio } from '../Interface/figlio';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonModule, InputTextModule, FloatLabelModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
@Input()
figlio!: Figlio;

@Output()
infoOutput: EventEmitter<any> = new EventEmitter<any>();

  checkoutForm: FormGroup = this.ciccioBuilder.group({
    nome: 'Mario',
    cognome: 'Rossi',
    telefono: '0612345677',
    email: 'mario-rossi-0@pippo.it',
    'api-key-mc':
      '0GkdEpGLdCzMwiBMcx7sL3jdEMGVocS1ebxtteMy1LS1J7PHse4IdEdUUX8TUueg',
    sezione: 'Lavora con noi',
    // figlio: {
    //   nome: 'Luigi',
    
    // }
  });
  constructor(
    private ciccioBuilder: FormBuilder,
    private ciccioService: FormServiceService
  ) {
    console.log('Costruttore!');
  }

  ngOnInit(): void {
    console.log('Ciao a padre!');
    this.infoOutput.emit('Ciao padre!')
  }
  prova(): void {
    console.log('Ciao!');
    this.ciccioService.backForm(this.checkoutForm.value).subscribe();
  }

}
