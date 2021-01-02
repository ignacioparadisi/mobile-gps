import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { AuthGuard } from 'src/resources/auth-guard';
import { UserService } from 'src/services/user.service';
import { RegisterPage } from '../register/register.page';

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
    private userService: UserService,
    private modalController: ModalController,
    private loadingController: LoadingController,
    private router: Router,
    private alertController: AlertController) { }

  ngOnInit() {
  }

  /**
   * Muestra la vista para hacer el registro de usuario.
   */
  async presentSignUpModal() {
    const modal = await this.modalController.create({
      component: RegisterPage
    });
    return await modal.present();
  }

  /**
   * Presenta una vista con un spinner.
   */
  private async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Iniciando sesión'
    });
    await loading.present();
    return loading;
  }

  /**
   * Presenta una alerta de error
   */
  async presentErrorAlert() {
    const alert = await this.alertController.create({
      header: 'Credenciales inválidas',
      message: 'El correo o la contraseña son inválidos.',
      buttons: ['Aceptar']
    });

    await alert.present();
  }

  /**
   * Ejecuta el login del usuario enviando el correo y la contraseña al servidor.
   */
  async login() {
    this.clearValidationMessages();
    this.validateFields();
    if (this.loginForm.valid) {
      const user = {
        id: null,
        email: null
      };
      const authInfo = {
        email: this.loginForm.get('email').value,
        password: this.loginForm.get('password').value
      };
      let loadingView = await this.presentLoading();
      this.userService.login(authInfo).subscribe((response) => {
        loadingView.dismiss();
        user.email = response.email;
        user.id = response.id;
        AuthGuard.saveUser(user);
        this.router.navigate(['/tabs']);
      }, error => {
        loadingView.dismiss();
        this.presentErrorAlert();
      });
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
