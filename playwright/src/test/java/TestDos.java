import com.microsoft.playwright.Browser;
import com.microsoft.playwright.BrowserType;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.Playwright;


public class TestDos {

    @org.junit.jupiter.api.Test
    public void testTwo() {
        Playwright playwright = Playwright.create();
        Browser browser = playwright.chromium().launch(new BrowserType.LaunchOptions().setHeadless(false));
        Page page = browser.newPage();
        page.navigate("https://www.saucedemo.com/");
        page.fill("input[name='user-name']", "standard_user");
        page.fill("input[name='password']", "secret_sauce");
        page.click("input[type='submit']"); // Click sobre el botón de login
        System.out.println("Login realizado con éxito");


    }
}
