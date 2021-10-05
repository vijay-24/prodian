package server_email_ver;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.core.internal.LoadingCache;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import java.net.IDN;
import java.util.Random;

@Controller
public class UserAccountController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ConfirmationTokenRepository confirmationTokenRepository;

    @Autowired
    private EmailService emailService;

    @RequestMapping(value="/register", method = RequestMethod.GET)
    public ModelAndView displayRegistration(ModelAndView modelAndView, UserEntity userEntity)
    {
        modelAndView.addObject("userEntity", userEntity);
        modelAndView.setViewName("register");
        return modelAndView;
    }
    
    
    int otp ;
    @RequestMapping(value="/register", method = RequestMethod.POST)
    public ModelAndView registerUser(ModelAndView modelAndView, UserEntity userEntity, Model model)
    {

//    	UserEntity existingUser = userRepository.findByEmailIdIgnoreCase(userEntity.getEmailId());
//        if(existingUser != null)
//        {
//            modelAndView.addObject("message","This email already exists!");
//            System.out.println("This email already exists!");
//            modelAndView.setViewName("error");
//        }
//        else
//        {
//            userRepository.save(userEntity);
            
            ConfirmationToken confirmationToken = new ConfirmationToken(userEntity);
            String newEmail = toIdnAddress(userEntity.getEmailId());
            System.out.println("^^^^^^^^^"+newEmail+"^^^^^^^^^^^");
           
            otp = generateOTP();
            
            System.out.println("-----------OTP^^"+otp);
//            modelAndView.setViewName("OtpPage");
            System.out.println("-----------1^^"+confirmationToken.getConfirmationToken());
//            confirmationTokenRepository.save(confirmationToken);
            System.out.println("-----------2");
            SimpleMailMessage mailMessage = new SimpleMailMessage();
//            mailMessage.setTo(userEntity.getEmailId());
            mailMessage.setTo(newEmail);
            mailMessage.setSubject("Complete Registration!");
            mailMessage.setFrom("vijaymart24@gmail.com");
//            mailMessage.setText("To confirm your account, please click here : "
//            +"http://localhost:8080/confirm-account?token="+confirmationToken.getConfirmationToken());
            mailMessage.setText(" Your OTP : "+otp);
            System.out.println("-----------3"+userEntity.getEmailId()+" ^^  "+mailMessage.toString());
            try {
            emailService.sendEmail(mailMessage);
            
            }
            catch(Exception e) {
            	modelAndView.setViewName("error");
            	System.out.println("-----------ERROR ^^^^^^^^^^^^^^^^");
            }
            System.out.println("-----------4");
            modelAndView.addObject("emailId", userEntity.getEmailId());
//            Model model = new Model();
//            model.addAttribute("emailId", userEntity.getEmailId());
            System.out.println("-----------5");
//            modelAndView.setViewName("successfulRegisteration");
            modelAndView.setViewName("OtpPage");
//        }

        return modelAndView;
    }
    
//    @RequestMapping(value="/otpCheck/{name}", method = RequestMethod.GET)
    @GetMapping("/otpCheck/{name}")
    public String OTPCheck(@PathVariable(name = "name") String name)
    {
    	System.out.println("OTP :"+otp+":  Entered otp :"+name+":");
    	String temp;
    	int temnum;
    	temnum =Integer.parseInt(name);  
//    	temp =Integer.toString(otp);
    	System.out.println((otp==temnum));
    	if(otp==temnum)
    	{
    		return "successfulRegisteration";
    	}
    	else
    	{
    		return "OtpWrong";
    	}
//    	ModelAndView modelAndView = null;
//    	modelAndView.setViewName("successfulRegisteration");
    	
    }
    
//    private LoadingCache<String, Integer> otpCache;
    
    public int generateOTP(){
    	Random random = new Random();
    	int otp = 100000 + random.nextInt(900000);
//    	otpCache.put(key, otp);
    	return otp;
    	 }
    	 
//    	 public int getOtp(String key){ 
//    	try{
//    	 return otpCache.get(key); 
//    	}catch (Exception e){
//    	 return 0; 
//    	}
//    	 }
//
//    	public void clearOTP(String key){ 
//    	 otpCache.invalidate(key);
//    	 }
   

//    =======email id changed as a format of acception java mail sender
        public String toIdnAddress(String mail) {
            if (mail == null) {
                return null;
            }
            int idx = mail.indexOf('@');
            if (idx < 0) {
                return mail;
            }
            return localPart(mail, idx) + "@" + IDN.toASCII(domain(mail, idx));
        }

        private String localPart(String mail, int idx) {
            return mail.substring(0, idx);
        }

        private String domain(String mail, int idx) {
            return mail.substring(idx + 1);
        }

    

    @RequestMapping(value="/confirm-account", method= {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView confirmUserAccount(ModelAndView modelAndView, @RequestParam("token")String confirmationToken)
    {
        ConfirmationToken token = confirmationTokenRepository.findByConfirmationToken(confirmationToken);

        if(token != null)
        {
        	UserEntity user = userRepository.findByEmailIdIgnoreCase(token.getUserEntity().getEmailId());
            user.setEnabled(true);
            userRepository.save(user);
            modelAndView.setViewName("accountVerified");
        }
        else
        {
            modelAndView.addObject("message","The link is invalid or broken!");
            modelAndView.setViewName("error");
        }

        return modelAndView;
    }
}
