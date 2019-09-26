package se.serviceware.rewards;

import java.util.ArrayList;
import java.util.List;

public class RewardService {

    List<RewardEventType> rewardEventTypes = new ArrayList<>();

    public RewardService() {
        rewardEventTypes.add(RewardEventType.builder()
                .id("rating_completed")
                .xp(5)
                .build());

        rewardEventTypes.add(RewardEventType.builder()
                .id("ticket_completed")
                .xp(20)
                .build());

        rewardEventTypes.add(RewardEventType.builder()
                .id("appointment_created")
                .xp(10)
                .build());
    }


}
