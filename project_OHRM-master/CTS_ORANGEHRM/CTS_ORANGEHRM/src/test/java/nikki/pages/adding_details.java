package nikki.pages;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.interactions.Actions;

public class adding_details 
{
	WebDriver driver;
	By username=By.id("txtUsername");
	By password=By.id("txtPassword");
	By login=By.id("btnLogin");
	By admin=By.xpath("//*[@id=\"menu_admin_viewAdminModule\"]/b");
	By user_management=By.id("menu_admin_UserManagement");
	By users=By.id("menu_admin_viewSystemUsers");
	By add=By.id("btnAdd");
    By user_role=By.id("systemUser_userType");
    By employee_name=By.id("systemUser_employeeName_empName");//systemUser_userName
    By username1=By.id("systemUser_userName");
    By status=By.id("systemUser_status");
    By password1=By.id("systemUser_password");
    By cnfpassword1=By.id("systemUser_confirmPassword");
    By save=By.id("btnSave");
  //Method to launch the multiple browsers and application
   
        	public void LaunchUrl2(String browser) 
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
    		
    	}
        	public void Open()
        	{
        		driver.get("https://opensource-demo.orangehrmlive.com/");
        		System.out.println(driver.getTitle());
        	}
    
			public void login_details2() 
		{
			driver.findElement(username).sendKeys("Admin");
			driver.findElement( password).sendKeys("admin123");	
			driver.findElement(login).click();
		}
	
		public void add_details() 
		{
			driver.findElement(admin).click();
			WebElement a=driver.findElement(user_management);
			WebElement b=driver.findElement(users);
			Actions act=new Actions(driver);
			act.moveToElement(a).click().build().perform();
			act.moveToElement(b).click().build().perform();
			driver.findElement(add).click();
			driver.findElement(user_role).click();
			driver.findElement(employee_name).sendKeys("uadygfdajg");
			driver.findElement(username1).sendKeys("fdygfdajg");
			driver.findElement(status).click();
			driver.findElement(password1).sendKeys("utehejg");
			driver.findElement(cnfpassword1).sendKeys("utehejg");
			driver.findElement(save).click();
		
		}
		

}
