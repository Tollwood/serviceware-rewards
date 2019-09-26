package se.serviceware.rewards;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RewardEventController {

    @Autowired
    private RewardEventRepository rewardEventRepository;
    @Autowired
    private RewardEventTypeRepository rewardEventTypeRepository;
    @Autowired
    private DataInitializationService dataInitializationService;
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/users/{userId}/events/{eventTypeId}")
    public void createEvent(@PathVariable("userId") String userId, @PathVariable("eventTypeId") String eventTypeId) {
        RewardEventType rewardEventType = rewardEventTypeRepository.findById(eventTypeId).orElseThrow(() -> new IllegalArgumentException("eventTypeId"));
        User user = userRepository.findById(userId).orElse(createUser(userId));
        RewardEvent rewardEvent = RewardEvent.builder()
                .rewardEventType(rewardEventType)
                .user(user)
                .build();
        rewardEventRepository.save(rewardEvent);
    }

    private User createUser(String userId) {
        return userRepository.save(User.builder().username(userId).build());
    }

    @GetMapping("/users/{userId}/events")
    public List<RewardEvent> getEvents(@PathVariable("userId") String userId){
        User user = userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("userId"));

        return rewardEventRepository.findRewardEventByUser(user);
    }
}


