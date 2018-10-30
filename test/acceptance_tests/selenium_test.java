package test;

import static org.junit.Assert.assertTrue;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

public class SeleniumTest {
	
	public static void main(String[] args) {

		WebDriver driver = new FirefoxDriver();
		WebDriverWait wait = new WebDriverWait(driver, 30);
		driver.get("https://www.google.com");

		// Variables.
		WebElement footer;
		List<WebElement> links;

		/******************/
		// Test Home page.//
		/******************/

		// Test home page.
		driver.get("https://www.equaleducation.info");

		// Check header.
		WebElement header = driver.findElement(By.id("page-header"));
	    assertTrue((header.isDisplayed()));

	    // Check title.
	    assertTrue("Equal Education".equals(driver.getTitle()));

	    // Check footer.
		footer = driver.findElement(By.xpath("/html/body/main/footer"));
		assertTrue((footer.isDisplayed()));

		// Check links.
		// From http://learn-automation.com/find-broken-links-using-selenium/
		links = driver.findElements(By.tagName("a"));
		
		System.out.println("Total links are " + links.size());
		
		for(int i = 0;i < links.size(); i++) {
			
			WebElement ele = links.get(i);
			
			String url = ele.getAttribute("href");
			
			assertTrue(verifyLinkActive(url));
			
		}

		/******************************/
		// Test School Districts page.//
		/******************************/

		driver.get("https://www.equaleducation.info/school.html");

		// Check header.
		header = driver.findElement(By.id("page-header"));
	    assertTrue((header.isDisplayed()));


	    // Check title.
	    assertTrue("Equal Education".equals(driver.getTitle()));

	    // Check footer.
		footer = driver.findElement(By.xpath("/html/body/main/footer"));
		assertTrue((footer.isDisplayed()));

		// Check links.
		// From http://learn-automation.com/find-broken-links-using-selenium/
		links = driver.findElements(By.tagName("a"));
		
		System.out.println("Total links are " + links.size());
		
		for(int i = 0; i < links.size(); i++) {
			
			WebElement ele = links.get(i);
			
			String url = ele.getAttribute("href");
			
			assertTrue(verifyLinkActive(url));
			
		}

		/***********************/
		// Test Volunteer page.//
		/***********************/

		driver.get("https://www.equaleducation.info/volunteer.html");

		// Check header.
		header = driver.findElement(By.id("page-header"));
	    assertTrue((header.isDisplayed()));

	    // Check title.
	    assertTrue("Equal Education".equals(driver.getTitle()));

    	// Check footer.
		footer = driver.findElement(By.xpath("/html/body/main/footer"));
		assertTrue((footer.isDisplayed()));

		// Check links.
		// From http://learn-automation.com/find-broken-links-using-selenium/
		links = driver.findElements(By.tagName("a"));
		
		System.out.println("Total links are " + links.size());
		
		for(int i = 0; i < links.size(); i++) {
			
			WebElement ele = links.get(i);
			
			String url = ele.getAttribute("href");
			
			assertTrue(verifyLinkActive(url));
			
		}
		
		/*********************/
		// Test Charity page.//
		/*********************/

		driver.get("https://www.equaleducation.info/charity.html");

		// Check header.
		header = driver.findElement(By.id("page-header"));
    	assertTrue((header.isDisplayed()));

	    // Check title.
	    assertTrue("Equal Education".equals(driver.getTitle()));

    	// Check footer.
		footer = driver.findElement(By.xpath("/html/body/main/footer"));
		assertTrue((footer.isDisplayed()));

		// Check links.
		// From http://learn-automation.com/find-broken-links-using-selenium/
		links = driver.findElements(By.tagName("a"));
		
		System.out.println("Total links are " + links.size());
		
		for(int i = 0;i < links.size(); i++) {
			
			WebElement ele = links.get(i);
			
			String url = ele.getAttribute("href");
			
			assertTrue(verifyLinkActive(url));
			
		}

		/*******************/
		// Test about page.//
		/*******************/

		driver.get("https://www.equaleducation.info/about.html");

		// Check header.
		header = driver.findElement(By.id("page-header"));
    	assertTrue((header.isDisplayed()));


	    // Check title.
	    assertTrue("Equal Education".equals(driver.getTitle()));

    	// Check footer.
		footer = driver.findElement(By.xpath("/html/body/main/footer"));
		assertTrue((footer.isDisplayed()));

		// Check links.
		// From http://learn-automation.com/find-broken-links-using-selenium/
		links = driver.findElements(By.tagName("a"));
		
		System.out.println("Total links are " + links.size());
		
		for(int i = 0; i < links.size(); i++) {
			
			WebElement ele = links.get(i);
			
			String url = ele.getAttribute("href");
			
			assertTrue(verifyLinkActive(url));
			
		}

		driver.quit();
	}

	// From http://learn-automation.com/find-broken-links-using-selenium/
	public static boolean verifyLinkActive(String linkUrl) {
        	try {
           		URL url = new URL(linkUrl);
           
           		HttpURLConnection httpURLConnect = (HttpURLConnection)url.openConnection();
           
           		httpURLConnect.setConnectTimeout(3000);
           
           		httpURLConnect.connect();
           
           		if(httpURLConnect.getResponseCode() == 200) {
               			return true;
          		}
           		if(httpURLConnect.getResponseCode() == HttpURLConnection.HTTP_NOT_FOUND) {
               			return false;
            		}
        	} catch (Exception e) {
           		return false;
        	}	
        	return false;
    	} 
	
}

