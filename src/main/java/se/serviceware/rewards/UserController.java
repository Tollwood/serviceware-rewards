package se.serviceware.rewards;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
        userRepository.save(new User("Jens", 0, 10, 0, "Noob", ""));
        userRepository.save(new User("Theo", 0, 10, 0, "Noob", ""));
        userRepository.save(new User("Tobi", 0, 10, 0, "Noob", ""));
    }

    @RequestMapping(path = "users", method = RequestMethod.GET)
    public List<User> users() {
        return userRepository.findAll();
    }

    @RequestMapping(path = "users/{username}", method = RequestMethod.GET)
    public User user(@PathVariable String username) {
        return userRepository.findById(username).get();
    }
}
