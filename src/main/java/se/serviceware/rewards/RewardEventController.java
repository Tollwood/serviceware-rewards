package se.serviceware.rewards;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class RewardEventController {

    @Autowired
    private RewardEventRepository rewardEventRepository;

    @PostMapping("/users/{userId}/events/{eventTypeId}")
    public void createEvent(@PathVariable("userId") String userId, @PathVariable("eventTypeId") String eventTypeId) {
        RewardEvent rewardEvent = RewardEvent.builder().rewardEventTypeId(eventTypeId).userId(userId).build();
        rewardEventRepository.save(rewardEvent);
    }

    @GetMapping("/users/{userId}/events")
    public List<RewardEvent> getEvents(@PathVariable("userId") String userId){
        return  rewardEventRepository.findRewardEventByUserId(userId);
    }
}


