package se.serviceware.rewards;

import org.springframework.stereotype.Service;

@Service
public class DataInitializationService {

    private RewardEventTypeRepository rewardEventTypeRepository;
    private UserRepository userRepository;
    private RankRepository rankRepository;

    public DataInitializationService(RewardEventTypeRepository rewardEventTypeRepository, UserRepository userRepository, RankRepository rankRepository) {
        this.rewardEventTypeRepository = rewardEventTypeRepository;
        this.userRepository = userRepository;
        this.rankRepository = rankRepository;

        rankRepository.save(Rank.builder().minXp(0).maxXp(30).rank("Noob").build());
        rankRepository.save(Rank.builder().minXp(31).maxXp(60).rank("Advanced").build());
        rankRepository.save(Rank.builder().minXp(61).maxXp(Integer.MAX_VALUE).rank("Master").build());

        userRepository.save(User.builder().username("Jens").pictureUrl("https://farm4.staticflickr.com/3247/2765310447_9490cb6780_m.jpg").build());
        userRepository.save(User.builder().username("Joe").pictureUrl("https://farm4.staticflickr.com/3247/2765310447_9490cb6780_m.jpg").build());
        userRepository.save(User.builder().username("Tobi").pictureUrl("https://farm4.staticflickr.com/3247/2765310447_9490cb6780_m.jpg").build());

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
