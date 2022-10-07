import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/shared/crud.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  Users: any = [];

  constructor(public crudService: CrudService) { }

  ngOnInit(): void {
  this.fetchUsers();
  }
  fetchUsers() {
    return this.crudService.getUsers().subscribe((res: {})=>{
      this.Users = res;
    });
  }

  delete(id: any) {
    if (window.confirm('Really?')) {
      this.crudService.deleteUser(id).subscribe((res)=>{
        this.fetchUsers();
      });
    }
  }

}
