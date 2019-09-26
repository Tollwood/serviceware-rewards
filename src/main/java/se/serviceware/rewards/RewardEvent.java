package se.serviceware.rewards;

import java.util.Date;

import javax.persistence.*;

import lombok.*;

@Setter
@Getter
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
class RewardEvent {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @ManyToOne
    private RewardEventType rewardEventType;
    @ManyToOne
    private User user;
    @Builder.Default
    private Date timestamp = new Date();

}
