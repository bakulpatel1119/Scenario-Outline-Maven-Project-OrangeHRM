package Orange1;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import java.util.concurrent.TimeUnit;

public class BrowserSelector extends BasePage
{
public void openBroser()
{
LoadProp loadProp = new LoadProp();
String browser = loadProp.getProperty("Browser");
    System.out.println("You are using " + browser + "Browser");

    // To open chrome browser
    if (browser.equalsIgnoreCase("chrome"))
    {
        System.setProperty("webdriver.chrome.driver", "src/test/resources/BrowserDrivers/chromedriver.exe");
        driver  = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
        driver.manage().window().maximize();
        driver.get("https://opensource-demo.orangehrmlive.com/");
    }

    // Top open firefox browser
    else if (browser.equalsIgnoreCase("firefox")) {

        System.setProperty("webdriver.firefox.driver", "src/test/resources/BrowserDrivers/geckodriver.exe");
        driver = new FirefoxDriver();
        driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
        driver.manage().window().maximize();
        driver.get("https://opensource-demo.orangehrmlive.com/");
    }
        else
            { System.out.println("Please enter valid Browser Name "); }
    }
}