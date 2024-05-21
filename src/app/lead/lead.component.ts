import { APP_BOOTSTRAP_LISTENER, Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { FormServiceService } from '../form-service.service';
import { Lead } from '../Interface/lead';
import { CommonModule, NgFor } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from '../header/header.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
  Form,
} from '@angular/forms';
import { FormComponent } from '../form/form.component';
import { SearchPipe } from '../search.pipe';
import { ToastModule } from 'primeng/toast';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-lead',
  standalone: true,
  templateUrl: './lead.component.html',
  styleUrl: './lead.component.scss',
  imports: [
    TableModule,
    CommonModule,
    ButtonModule,
    HeaderComponent,
    FormsModule,
    FormComponent,
    NgFor,
    SearchPipe,
    ReactiveFormsModule,
    ToastModule,
  ],
})
export class LeadComponent implements OnInit {
  idSelezionato!: number;
  searchText = '';
  table!: Lead[];
  leadForm: FormGroup = this.leadModal.group({
    nome: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    telefono: new FormControl(null, [
      Validators.required,
      Validators.minLength(10),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
  });

  items = [
    {
      nome: '',
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
    private leadService: FormServiceService,
    private leadModal: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getLeads();
  }
  getLeads(): void {
    this.leadService.obtainLead().subscribe((response) => {
      this.table = response;
    });
  }

  delete(id: number): void {
    this.leadService.deleteLead(id).subscribe();
    this.getLeads();
  }

  leadSelezionato(id: number): void {
    this.idSelezionato = id;
  }

  update(): void {
    this.leadService
      .updateLead(this.idSelezionato, this.leadForm.value)
      .subscribe();

    this.leadForm.reset();
    const modal = document.getElementById('modal2');
    if (modal != null) {
      modal.style.display = 'none';
      this.getLeads();
    }
  }
}
