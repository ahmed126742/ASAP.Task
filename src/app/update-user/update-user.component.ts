import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../User.module'

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent {
  user: User = {
    id : 0,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
};

constructor(private userService: UserService) {}

onSubmit() {
    this.userService.updateUser(this.user).subscribe(response => {
        console.log('User Updated Successfully:');
    });
}

clearForm() {
  this.user = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  };
}
}
