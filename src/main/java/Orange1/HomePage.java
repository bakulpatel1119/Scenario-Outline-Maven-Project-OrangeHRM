package Orange1;
import org.openqa.selenium.By;

public class HomePage extends Utils
{
//private By _username = By.id("txtUsername");
//private By _password = By.id("txtPassword");

private By _loginButton = By.xpath("//input[@id=\"btnLogin\"]");

 public void enterUsername(String username)  {
     try { Thread.sleep(3000); } catch (InterruptedException e) { e.printStackTrace(); }
// enter username
     driver.findElement(By.id("txtUsername")).sendKeys(username);  }

 public void enterPassword(String password)  {
     try { Thread.sleep(3000); } catch (InterruptedException e) { e.printStackTrace(); }
     // enter password
     driver.findElement(By.id("txtPassword")).sendKeys(password);  }

  public void clickLoginButton()
 {
    // click on login button
    clickonElement(_loginButton);
 }
}
