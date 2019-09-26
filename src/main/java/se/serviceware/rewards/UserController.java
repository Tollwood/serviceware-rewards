package se.serviceware.rewards;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
public class UserController {

    private final UserRepository userRepository;
    private RewardEventRepository rewardEventRepository;
    private RankRepository rankRepository;

    public UserController(UserRepository userRepository, RewardEventRepository rewardEventRepository, RankRepository rankRepository) {
        this.userRepository = userRepository;
        this.rewardEventRepository = rewardEventRepository;
        this.rankRepository = rankRepository;
    }

    @RequestMapping(path = "users", method = RequestMethod.GET)
    public List<User> users() {
        return userRepository.findAll().stream()
                .peek(this::completeUser)
                .collect(Collectors.toList());
    }


    @RequestMapping(path = "users/{username}", method = RequestMethod.GET)
    public User user(@PathVariable String username) {
        User user = userRepository.findById(username).orElseThrow(() -> new IllegalArgumentException("username"));
        completeUser(user);
        return user;
    }

    private void completeUser(User user){
        user.setXp(calculateXp(user));
        user.setRank(calculateRank(user.getXp()));
    }

    private int calculateXp(User user) {
        List<RewardEvent> events = rewardEventRepository.findRewardEventByUser(user);
        return events.stream()
                .map(rewardEvent -> rewardEvent.getRewardEventType().getXp())
                .reduce(Integer::sum).orElse(0);
    }

    private Rank calculateRank(int totalExperience){
        return rankRepository.getRank(totalExperience);

    }
}
