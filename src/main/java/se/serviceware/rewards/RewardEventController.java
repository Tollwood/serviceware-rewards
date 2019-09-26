package se.serviceware.rewards;

import java.util.Date;
import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RewardEventController {

    @Autowired
    RewardEventRepository rewardEventRepository;

    @PostMapping("/users/{userId}/events/{eventId}")
    public void createEvent(@PathParam("userId") String userId, @PathParam("eventId") String eventId) {
        RewardEvent rewardEvent = new RewardEvent(eventId, userId, new Date());
        rewardEventRepository.save(rewardEvent);
    }

    @GetMapping("/users/{userId}/events")
    public List<RewardEvent> getEvents(@PathParam("userId") String userId){
        return  rewardEventRepository.findRewardEventByUserId(userId);
    }
}


