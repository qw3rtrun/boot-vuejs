package org.example.bootvuejs;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
public class BootVuejsApplication {

    public static void main(String[] args) {
        SpringApplication.run(BootVuejsApplication.class, args);
    }

}

@Controller
class HelloThymeleafController {

    @GetMapping(path = "/thymeleaf")
    public String thymleaf(Model model) {
        model.addAttribute("name", "Thymeleaf");
        return "hellothymeleaf";
    }

}
