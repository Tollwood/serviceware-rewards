package se.serviceware.rewards;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

    private final UserRepository userRepository;
    private RewardEventRepository rewardEventRepository;

    public UserController(UserRepository userRepository, RewardEventRepository rewardEventRepository) {
        this.userRepository = userRepository;
        this.rewardEventRepository = rewardEventRepository;
        userRepository.save(new User("Jens", 0, 10, 0, "Noob", "https://farm4.staticflickr.com/3247/2765310447_9490cb6780_m.jpg"));
        userRepository.save(new User("Theo", 0, 10, 0, "Noob", "https://farm4.staticflickr.com/3247/2765310447_9490cb6780_m.jpg"));
        userRepository.save(new User("Tobi", 0, 10, 0, "Noob", "https://farm4.staticflickr.com/3247/2765310447_9490cb6780_m.jpg"));
    }

    @RequestMapping(path = "users", method = RequestMethod.GET)
    public List<User> users() {
        return userRepository.findAll();
    }

    @RequestMapping(path = "users/{username}", method = RequestMethod.GET)
    public User user(@PathVariable String username) {
        User user = userRepository.findById(username).orElse(createUser(username));
        List<RewardEvent> events = rewardEventRepository.findRewardEventByUser(user);
        Integer totalExperience = events.stream()
                .map(rewardEvent -> rewardEvent.getRewardEventType().getXp())
                .reduce(Integer::sum).orElse(0);
        user.setXp(totalExperience);
        return user;
    }

    private User createUser(String username) {
        return userRepository.save(new User(username, 0, 10, 0,"Noob", "https://farm4.staticflickr.com/3247/2765310447_9490cb6780_m.jpg"));
    }

}
