package se.serviceware.rewards;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;

@Entity
@AllArgsConstructor
public class RewardEvent {

    @Id
    private String id;
    private String userId;
    private Date timestamp;

}
