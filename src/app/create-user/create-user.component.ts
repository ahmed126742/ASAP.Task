import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../User.module';

@Component({
    selector: 'app-create-user',
    templateUrl: './create-user.component.html',
    styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent   {

    user: User = {
        id : 0,
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
    };

    constructor(private userService: UserService) {}

    onSubmit() 
    {
        console.log('fired')
        this.userService.createUser(this.user).subscribe(response => {
            console.log('User created:', response);
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
