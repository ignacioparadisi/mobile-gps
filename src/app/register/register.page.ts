import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { AuthGuard } from 'src/resources/auth-guard';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  private loadingView;
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
    password: new FormControl('', [Validators.required]),
    validPassword: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    documentId: new FormControl('', [Validators.required]),
    birthday: new FormControl('', [Validators.required])
  });

  constructor(
    private modalController: ModalController,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private userService: UserService,
    private router: Router) { }

  dismiss() {
    this.modalController.dismiss();
  }

  /**
   * Presenta una vista de carga mientras se envian los datos al servidor.
   */
  private async presentLoading() {
    this.loadingView = await this.loadingController.create({
      message: 'Creando cuenta'
    });
    await this.loadingView.present();
  }

  private async dismissLoading() {
    await this.loadingView.dismiss();
  }

  /**
   * Presenta una alerta de error
   */
  async presentErrorAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Hubo un error al crear el usuario.',
      buttons: ['Aceptar']
    });

    await alert.present();
  }

  /**
   * Se validan los campos y se envian los datos al servidor para ser creado el usuario.
   */
  createAccount() {
    this.clearValidationMessages();
    this.validateFields();
    if (this.registerForm.valid) {
      this.presentLoading();
      const user = {
        full_name: this.registerForm.get('name').value,
        email: this.registerForm.get('email').value,
        cedula: this.registerForm.get('documentId').value,
        phone: this.registerForm.get('phone').value,
        password: this.registerForm.get('password').value
      };
      this.userService.createUser(user).subscribe(response => {
        console.log(response);
        this.dismissLoading();
        this.dismiss();
        const user = {
          id: response.id,
          email: response.email
        };
        AuthGuard.saveUser(user);
        this.router.navigate(['/tabs']);
      }, error => {
        console.log(error);
        this.dismissLoading();
        this.presentErrorAlert();
      });
    }
  }

  /**
   * Limpia los mensajes de error.
   */
  private clearValidationMessages() {
    this.validationMessages.name = [];
    this.validationMessages.email = [];
    this.validationMessages.password = [];
    this.validationMessages.validPassword = [];
    this.validationMessages.phone = [];
    this.validationMessages.documentId = [];
    this.validationMessages.birthday = [];
  }

  /**
   * Valida que los campos tengan información válida.
   */
  private validateFields() {
    this.validateEmailField();
    this.validateNameField();
    this.validatePasswordField();
    this.validateBirthdayField();
    this.validateDocumentIdField();
    this.validatePhoneField();
  }

  /**
   * Valida la información que contiene el campo de email.
   */
  private validateEmailField() {
    const emailErrors = this.registerForm.get('email').errors;
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
   * Valida la información que contiene el campo de nombre.
   */
  private validateNameField() {
    const nameErrors = this.registerForm.get('name').errors;
    if (nameErrors) {
      if (nameErrors.required) {
        this.validationMessages.name.push('El nombre es obligatorio.');
      }
    }
  }

  /**
   * Valida la información que contiene el campo de contraseña.
   */
  private validatePasswordField() {
    const passwordErrors = this.registerForm.get('password').errors;
    const validPasswordErrors = this.registerForm.get('validPassword').errors;

    if (!passwordErrors && !validPasswordErrors) {
      if (this.registerForm.get('password').value !== this.registerForm.get('validPassword').value) {
        this.validationMessages.password.push('Las contraseñas no coinciden');
        this.validationMessages.validPassword.push('Las contraseñas no coinciden');
      }
    }
    if (passwordErrors) {
      if (passwordErrors.required) {
        this.validationMessages.password.push('La contraseña es obligatorio.');
      }
    }
    if (validPasswordErrors) {
      if (validPasswordErrors.required) {
        this.validationMessages.validPassword.push('La comprobación de la contraseña es obligatorio.');
      }
    }
  }

  /**
   * Valida la información que contiene el campo de cédula.
   */
  private validateDocumentIdField() {
    const documentIdErrors = this.registerForm.get('documentId').errors;
    if (documentIdErrors) {
      if (documentIdErrors.required) {
        this.validationMessages.documentId.push('La cédula es obligatorio.');
      }
    }
  }

  /**
   * Valida la información que contiene el campo de fecha de nacimiento.
   */
  private validateBirthdayField() {
    const birthdayErrors = this.registerForm.get('birthday').errors;
    if (birthdayErrors) {
      if (birthdayErrors.required) {
        this.validationMessages.birthday.push('La fecha de nacimiento es obligatorio.');
      }
    }
  }

  /**
   * Valida la información que contiene el campo de número de teléfono.
   */
  private validatePhoneField() {
    const phoneErrors = this.registerForm.get('phone').errors;
    if (phoneErrors) {
      if (phoneErrors.required) {
        this.validationMessages.phone.push('El número telefónico es obligatorio.');
      }
    }
  }

}
