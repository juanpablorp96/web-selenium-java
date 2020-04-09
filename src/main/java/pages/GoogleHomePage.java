package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import utils.BasePage;


public class GoogleHomePage extends BasePage {

    @FindBy(name = "q")
    private WebElement search_field;

    /**
     * Constructor.
     */
    public GoogleHomePage(WebDriver driver) {
        super(driver);
    }

    /**
     * Method to fill out the search field.
     *
     */
    public void search(String text) {
        search_field.sendKeys(text);
    }

    public void clickSearch(){
        search_field.submit();
    }
}
