package se.serviceware.rewards;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface RankRepository extends CrudRepository<Rank, Long> {
    @Query("SELECT r FROM Rank r WHERE ?1 BETWEEN r.minXp AND r.maxXp")
    Rank getRank(int xp);
}
