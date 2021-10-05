package server_email_ver;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service("emailService")
public class EmailService {

    private JavaMailSender javaMailSender;

    @Autowired
    public EmailService(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
        System.out.println("^^^^^javaMailSender^^^^^^^");
    }

    @Async
    public void sendEmail(SimpleMailMessage email) {
        javaMailSender.send(email);
        System.out.println("^^^^^javaMailSende  Async^^^^^^^");
    }
}
