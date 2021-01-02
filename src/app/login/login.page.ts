import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { AuthGuard } from 'src/resources/auth-guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public validationMessages = {
    email: [],
    password: []
  };
  public loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(
    private modalController: ModalController,
    private loadingController: LoadingController,
    private router: Router) { }

  ngOnInit() {
  }

  /**
   * Muestra la vista para hacer el registro de usuario.
   */
  // async presentSignUpModal() {
  //   const modal = await this.modalController.create({
  //     component: RegisterPage
  //   });
  //   return await modal.present();
  // }

  /**
   * Presenta una vista con un spinner.
   */
  private async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Iniciando sesión',
      duration: 2000
    });
    await loading.present();

    this.router.navigate(['/tabs']);
  }

  /**
   * Ejecuta el login del usuario enviando el correo y la contraseña al servidor.
   */
  login() {
    this.clearValidationMessages();
    this.validateFields();
    if (this.loginForm.valid) {
      const user = {
        email: '123@123.com'
      };
      AuthGuard.saveUser(user);
      this.presentLoading();
    }
  }

  /**
   * Limpia los mensajes de error.
   */
  private clearValidationMessages() {
    this.validationMessages.email = [];
    this.validationMessages.password = [];
  }

  /**
   * Valida que los campos tengan información válida.
   */
  private validateFields() {
    this.validateEmailField();
    this.validatePasswordField();
  }

  /**
   * Valida la información que contiene el campo de email.
   */
  private validateEmailField() {
    const emailErrors = this.loginForm.get('email').errors;
    console.log(emailErrors);
    if (emailErrors) {
      if (emailErrors.required) {
        this.validationMessages.email.push('El correo electrónico es obligatorio.');
      }
      if (emailErrors.email) {
        this.validationMessages.email.push('El formato del correo electrónico no es válido.');
      }
    }
  }

  /**
   * Valida la información que contiene el campo de contraseña.
   */
  private validatePasswordField() {
    const passwordErrors = this.loginForm.get('password').errors;
    console.log(passwordErrors);
    if (passwordErrors) {
      if (passwordErrors.required) {
        this.validationMessages.password.push('La contraseña es obligatoria.');
      }
    }
  }


}
