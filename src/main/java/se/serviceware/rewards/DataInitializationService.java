package se.serviceware.rewards;

import org.springframework.stereotype.Service;

@Service
public class DataInitializationService {

    private RewardEventTypeRepository rewardEventTypeRepository;
    private UserRepository userRepository;
    private RankRepository rankRepository;
    private RewardEventRepository rewardEventRepository;
    private final RewardEventType appointment_created;


    private RewardEventType rating_completed;
    private RewardEventType ticket_completed;

    public DataInitializationService(RewardEventTypeRepository rewardEventTypeRepository, UserRepository userRepository,
            RankRepository rankRepository, RewardEventRepository rewardEventRepository) {
        this.rewardEventTypeRepository = rewardEventTypeRepository;
        this.userRepository = userRepository;
        this.rankRepository = rankRepository;
        this.rewardEventRepository = rewardEventRepository;

        rankRepository.save(Rank.builder().minXp(0).maxXp(29).rank("Trainee").build());
        rankRepository.save(Rank.builder().minXp(30).maxXp(69).rank("Agent").build());
        rankRepository.save(Rank.builder().minXp(70).maxXp(109).rank("Super Agent").build());
        rankRepository.save(Rank.builder().minXp(110).maxXp(149).rank("Hero").build());
        rankRepository.save(Rank.builder().minXp(150).maxXp(189).rank("Super Hero").build());
        rankRepository.save(Rank.builder().minXp(190).maxXp(229).rank("Ultra Hero").build());
        rankRepository.save(Rank.builder().minXp(230).maxXp(Integer.MAX_VALUE).rank("Legendary Hero").build());

        User jens = userRepository.save(User.builder().username("Jens").build());
        User joe = User.builder().username("Joe").build();
        userRepository.save(joe);
        User tobi = User.builder().username("Tobi").build();
        userRepository.save(tobi);
        User max = User.builder().username("Max").build();
        userRepository.save(max);
        User lisa = User.builder().username("Lisa").build();
        userRepository.save(lisa);
        User anna = User.builder().username("Anna").build();
        userRepository.save(anna);
        User mirabelle = User.builder().username("Mirabelle").build();
        userRepository.save(mirabelle);

        rating_completed = rewardEventTypeRepository.save(RewardEventType.builder()
                .id("rating_completed")
                .xp(5)
                .build());
        ticket_completed = rewardEventTypeRepository.save(RewardEventType.builder()
                .id("ticket_completed")
                .xp(20)
                .build());
        appointment_created = rewardEventTypeRepository.save(RewardEventType.builder()
                .id("appointment_created")
                .xp(10)
                .build());

        //"Trainee"
        gain20Points(jens);
        gain5Points(jens);

        //"Agent"
        gain20Points(tobi);
        gain20Points(tobi);
        gain5Points(tobi);

        //"Super Agent"
        gain20Points(max);
        gain20Points(max);
        gain20Points(max);
        gain20Points(max);

        //"Hero"
        gain20Points(lisa);
        gain20Points(lisa);
        gain20Points(lisa);
        gain20Points(lisa);
        gain20Points(lisa);
        gain20Points(lisa);
        gain5Points(lisa);


        //"Super Hero"
        gain20Points(anna);
        gain20Points(anna);
        gain20Points(anna);
        gain20Points(anna);
        gain20Points(anna);
        gain20Points(anna);
        gain20Points(anna);
        gain20Points(anna);
        gain10Points(anna);


        //"Ultra Hero"
        gain20Points(mirabelle);
        gain20Points(mirabelle);
        gain20Points(mirabelle);
        gain20Points(mirabelle);
        gain20Points(mirabelle);
        gain20Points(mirabelle);
        gain20Points(mirabelle);
        gain20Points(mirabelle);
        gain20Points(mirabelle);
        gain20Points(mirabelle);


        //"Legendary Hero"
        gain20Points(joe);
        gain20Points(joe);
        gain20Points(joe);
        gain20Points(joe);
        gain20Points(joe);
        gain20Points(joe);
        gain20Points(joe);
        gain20Points(joe);
        gain20Points(joe);
        gain20Points(joe);
        gain20Points(joe);
        gain20Points(joe);

    }

    private void gain10Points(User user) {
        rewardEventRepository.save(RewardEvent.builder()
                .rewardEventType(this.appointment_created)
                .user(user)
                .build());
    }

    private void gain5Points(User user) {
        rewardEventRepository.save(RewardEvent.builder()
                .rewardEventType(this.rating_completed)
                .user(user)
                .build());
    }

    private void gain20Points( User user) {
        rewardEventRepository.save(RewardEvent.builder()
                .rewardEventType(this.ticket_completed)
                .user(user)
                .build());
    }
}
