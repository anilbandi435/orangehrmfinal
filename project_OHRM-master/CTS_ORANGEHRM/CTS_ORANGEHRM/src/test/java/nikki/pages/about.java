package nikki.pages;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
public class about
{
	WebDriver driver;
	By username=By.id("txtUsername");
	By password=By.id("txtPassword");
	By login=By.id("btnLogin");
	By welcome_admin=By.id("welcome");
	By about=By.id("aboutDisplayLink");
	//to launch browser and application
	public void LaunchUrl4(String browser) 
	{
		if(browser.equalsIgnoreCase("Chrome")) {
		System.setProperty("webdriver.chrome.driver","driver\\chromedriver.exe");
		driver = new ChromeDriver();
		}
		else if(browser.equalsIgnoreCase("Explorer")) {
			
			System.setProperty("webdriver.IE.driver","driver\\IEDriverServer.exe");
			driver = new InternetExplorerDriver();
			}
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
		driver.get("https://opensource-demo.orangehrmlive.com/");
		System.out.println(driver.getTitle());
	}
	

//	public void orangeHRM()
//	{
//		driver.get("https://opensource-demo.orangehrmlive.com/");
//		System.out.println(driver.getTitle());
//
//	}
	//login details of application
	public void login_details4() 
	{
		driver.findElement(username).sendKeys("Admin");
		driver.findElement( password).sendKeys("admin123");	
		driver.findElement(login).click();
	}
   
	public void about_HRM() 
	{

		driver.findElement(welcome_admin).click();
		driver.findElement(about).click();
		}
	//It will screenshot The about  details
	public void screenshot(String fileWithPath) throws IOException 
	{
		TakesScreenshot ts =(( TakesScreenshot)driver); 
		File teja1=ts.getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(teja1,new File(fileWithPath));
	}
	
}
