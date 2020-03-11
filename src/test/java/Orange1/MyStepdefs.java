package Orange1;
import com.sun.org.apache.bcel.internal.generic.ARETURN;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;

public class MyStepdefs extends Utils {
    HomePage homePage = new HomePage();

    @Given("user is on homepage")
    public void userIsOnHomepage() {}

    // Enter username
    @When("user enter {string}")
    public void userEnter(String username)
    { homePage.enterUsername(username); }

    // Enter Password
    @And("use enter {string}")
    public void useEnter(String password)
    { homePage.enterPassword(password); }

    // click on Login Button
    @And("click on Login Button")
    public void clickOnLoginButton()
    {  homePage.clickLoginButton();  }

    // Verify error message will be displayed
    @Then("user should not able to login And user can see {string}")
    public void userShouldNotAbleToLoginAndUserCanSee(String message)
    {   String actual = getTextfromElement1(By.xpath("//span[@id=\"spanMessage\"]"));
        String expected = message;
        try { Thread.sleep(5000); } catch (InterruptedException e) { e.printStackTrace(); }
        Assert.assertEquals(expected,actual); }
}