import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/index.html');
  await page.getByRole('img', { name: 'logo' }).click();
  await page.getByRole('link', { name: 'Escuela de paz y reconciliación' }).click();
  await page.getByRole('link', { name: 'Inicio' }).click();
  await page.getByRole('link', { name: 'Servicios' }).click();
  await page.getByRole('link', { name: 'Testimonios' }).click();
  await page.getByRole('link', { name: 'Agenda o contacto' }).click();
  await page.getByRole('link', { name: 'Eventos' }).click();
  await page.getByRole('heading', { name: 'CompaZión' }).click();
  await page.getByRole('heading', { name: 'Patrick Simeon' }).click();
  await page.getByRole('button', { name: 'Más información' }).click();
  await page.frameLocator('iframe[title="YouTube video player"]').getByRole('button', { name: 'Reproducir' }).click();
  await page.frameLocator('iframe[title="YouTube video player"]').getByRole('button', { name: 'Pausa combinación de teclas k' }).click();
});