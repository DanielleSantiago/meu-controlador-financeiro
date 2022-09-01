import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CategoriaEnum } from './../../../../core/enums/categoria.enum';
import { Meses } from './../../../../core/enums/mes.enum';


@Component({
  selector: 'app-lancamentos-list',
  templateUrl: './lancamentos-list.component.html',
  styleUrls: ['./lancamentos-list.component.css'],
})

export class LancamentosListComponent implements OnInit {
  
  meses: any = Meses;
  categorias: any = CategoriaEnum;


  constructor(public router: Router, public activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {}

  cadastrarLancamento() {
    this.router.navigate(['cadastro']);
  }

}
