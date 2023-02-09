import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';

test('test', async ({ page }) => {// test es el nombre de la prueba 
  await page.goto('https://www.saucedemo.com/');//acá va la url de la página a probar
  const loginPage = new LoginPage(page);//acá se crea una instancia de la clase LoginPage
  await loginPage.goto('standard_user','secret_sauce');//acá se llama al método goto de la clase LoginPage y se le pasan los parámetros de usuario y contraseña

  
  
});