import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../pages/interfaces/heroes.interfaces';

@Component({
  selector: 'app-confirmae',
  templateUrl: './confirmae.component.html',
  styleUrls: ['./confirmae.component.css']
})
export class ConfirmaeComponent implements OnInit {

  constructor(private dialoggref: MatDialogRef<ConfirmaeComponent>,
               @Inject(MAT_DIALOG_DATA) public data:Heroe) { }

  ngOnInit(): void {
  }

  borrar() {
    this.dialoggref.close(true);
  }

  cerrar() {
    this.dialoggref.close();
    
  }


}
