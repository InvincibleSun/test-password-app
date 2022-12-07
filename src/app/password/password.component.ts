import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
})
export class PasswordComponent implements OnInit {
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);

  ngOnInit() {}
}
