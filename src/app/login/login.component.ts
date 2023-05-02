import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    public username!: string;
    public password!: string;

    constructor(private http: HttpClient) { }

    login() {
        const loginUrl = 'http://localhost:8083/login'; // Replace with your actual login URL

        const payload = {
            username: this.username,
            password: this.password
        };

        this.http.post(loginUrl, payload).subscribe(
            value => {
                console.log('Login Successful! ', value);
            }, error => {
                console.log('Login failed! ', error);
            }
        )
    }
}
