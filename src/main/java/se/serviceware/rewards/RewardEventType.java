package se.serviceware.rewards;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RewardEventType {

    @Id
    private String id;
    private int xp;

}
