package se.serviceware.rewards;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface RewardEventRepository extends CrudRepository<RewardEvent, String> {

    public List<RewardEvent> findRewardEventByUserId(String userId);
}
