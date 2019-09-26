package se.serviceware.rewards;

import org.springframework.stereotype.Service;



@Service
public class RewardEventTypeService {

    private RewardEventTypeRepository rewardEventTypeRepository;

    public RewardEventTypeService(RewardEventTypeRepository rewardEventTypeRepository) {
        this.rewardEventTypeRepository = rewardEventTypeRepository;
        rewardEventTypeRepository.save(RewardEventType.builder()
                .id("rating_completed")
                .xp(5)
                .build());
        rewardEventTypeRepository.save(RewardEventType.builder()
                .id("ticket_completed")
                .xp(20)
                .build());
        rewardEventTypeRepository.save(RewardEventType.builder()
                .id("appointment_created")
                .xp(10)
                .build());
    }


}
