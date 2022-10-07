import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/shared/crud.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  userObj: any = {};
  
  constructor(
    public crudService: CrudService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.crudService.getSingleUser(this.id).subscribe((res)=>{
      this.userObj = res;
    })
  }

  updateUser(id: any, data: any) {
    if (window.confirm('Yes, please...')) {
      this.crudService.updateUser(this.id, data).subscribe((res)=>{
        this.router.navigate(['/list']);
      });
    }
  }

}
