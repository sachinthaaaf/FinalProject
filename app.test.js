import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.By;
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class SeleniumTest {
    
    @Test
    public void testGoogleSearch() {
        // Set the path to your ChromeDriver (adjust path as per your system)
        System.setProperty("webdriver.chrome.driver", "/path/to/chromedriver");

        // Create a new instance of ChromeDriver
        WebDriver driver = new ChromeDriver();
        
        // Open Google
        driver.get("https://www.google.com");

        // Get the title of the page
        String title = driver.getTitle();
        
        // Verify that the title is "Google"
        assertEquals("Google", title);
        
        // Close the browser
        driver.quit();
    }
}
