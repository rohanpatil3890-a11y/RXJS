import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-get-conform',
  templateUrl: './get-conform.component.html',
  styleUrls: ['./get-conform.component.scss']
})
export class GetConformComponent implements OnInit {

  msg !: string
  constructor(private _matDilogRef : MatDialogRef<GetConformComponent>,
    @Inject(MAT_DIALOG_DATA) getmsg : string 
  )
  
  {
      this.msg = getmsg
   }

  ngOnInit(): void {
  }

  onClose(flag : boolean){
    this._matDilogRef.close(flag)
  }

}
