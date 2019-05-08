package cn.webyun.backend.Controller;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/home")
public class HomeController {

    @GetMapping("")
    public String user( ) {

        return "HomeController";
    }

}
