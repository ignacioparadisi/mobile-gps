import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthGuard } from 'src/resources/auth-guard';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: 'account.page.html',
  styleUrls: ['account.page.scss']
})
export class AccountPage implements OnInit {

  private loadingView
  public isEditEnabled = false;
  public editButtonTitle = 'Editar';
  public validationMessages = {
    name: [],
    email: [],
    password: [],
    validPassword: [],
    phone: [],
    documentId: [],
    birthday: []
  };
  public registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', []),
    validPassword: new FormControl('', []),
    phone: new FormControl('', [Validators.required]),
    documentId: new FormControl('', [Validators.required]),
    birthday: new FormControl('', [Validators.required])
  });

  constructor(private router: Router, private userService: UserService, private loadingController: LoadingController) { }

  ngOnInit() {
    this.presentLoading();
    this.userService.getSignedInUser().subscribe((user) => {
      this.dismissLoading();
      this.registerForm.get('name').setValue(user.full_name);
      this.registerForm.get('email').setValue(user.email);
      this.registerForm.get('phone').setValue(user.phone);
      this.registerForm.get('documentId').setValue(user.cedula);
    }, error => {
      this.dismissLoading();
      console.log(error);
    })
  }

  /**
   * Presenta una vista de carga mientras se envian los datos al servidor.
   */
  private async presentLoading() {
    this.loadingView = await this.loadingController.create({
      message: 'Cargando'
    });
    await this.loadingView.present();
  }

  private async dismissLoading() {
    await this.loadingView.dismiss();
  }

  public logOut() {
    AuthGuard.removeUser();
    this.router.navigate(['/login']);
  }

  public handleEdit() {
    this.isEditEnabled = !this.isEditEnabled;
    this.editButtonTitle = this.isEditEnabled ? 'Cancelar' : 'Editar';
  }

}
