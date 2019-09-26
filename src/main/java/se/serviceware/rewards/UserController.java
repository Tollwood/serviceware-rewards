package se.serviceware.rewards;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @RequestMapping(path = "users", method = RequestMethod.GET)
    public List<User> users() {
        return Arrays.asList(new User(0, 10, 0, 0));
    }

}
