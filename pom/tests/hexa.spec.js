const { chromium } = require('playwright');

describe('Agregar Referencia', () => {
  it('Agregar una nueva referencia', async () => {
    const browser = await chromium.launch(); //definir el navegador a utilizar 
    const context = await browser.newContext(); //definir el contexto del navegador que es donde se ejecutará el test
    const page = await context.newPage(); //definir la página donde se ejecutará el test

    // visitar la página de agregar referencia
    await page.goto('http://localhost:3000/agregar-referencia');

    // seleccionar el tipo de referencia
    const tipoReferencia = await page.$('#tipo-referencia'); //seleccionar el elemento tipo-referencia según su id
    await tipoReferencia.selectOption('Amigo');

    // ingresar los datos de la nueva referencia
    await page.fill('#nombre1', 'Juan');
    await page.fill('#nombre2', 'Pablo');
    await page.fill('#apellido1', 'Rodriguez');
    await page.fill('#apellido2', 'Garcia');
    const parentesco = await page.$('#parentesco');
    await parentesco.selectOption('Hermano');
    await page.fill('#celular', '3123456789');
    await page.fill('#telefono-fijo', '25874150');

    // hacer clic en el botón guardar
    const guardar = await page.$('#guardar');
    await guardar.click();

    // verificar que la referencia se haya guardado correctamente
    await page.waitForSelector('.mensaje-exito');
    const mensajeExito = await page.$('.mensaje-exito');
    const mensaje = await mensajeExito.innerText();
    expect(mensaje).toBe('Registro guardado exitosamente');

    await browser.close(); //cerrar el navegador
  });
});
