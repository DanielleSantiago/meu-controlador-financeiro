import { Meses } from './../../../../core/enums/mes.enum';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lancamentos-list',
  templateUrl: './lancamentos-list.component.html',
  styleUrls: ['./lancamentos-list.component.css'],
})
export class LancamentosListComponent implements OnInit {
  
  mes = '';
  meses = Meses;
  enumMeses;
  
  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute
    ) {
      this.enumMeses = Object.keys(this.meses).filter(f => !isNaN(Number(f)));
    }
  
    change(value: any) {
      this.mes = this.meses[value];
    }

  ngOnInit(): void {}

  cadastrarLancamento() {
    this.router.navigate(['cadastro']);
  }
}
