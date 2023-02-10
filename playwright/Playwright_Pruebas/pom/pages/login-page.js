// playwright-dev-page.js
const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    //declaración de variables o atributos
    this.page = page;
    this.user= page.locator('[data-test="username"]')
    this.pass=page.locator('[data-test="password"]')
    this.loginButton=page.locator('[data-test="login-button"]')
  }

  async goto(user,pass) { //acá van las acciones que se van a realizar en la página
    await this.user.fill(user) //acá traigo la variable user y la lleno con el usuario
    await this.pass.fill(pass); //acá traigo la variable pass y la lleno con la contraseña
    await this.loginButton.click();//acá da click en el botón de login
  
  }

  
}