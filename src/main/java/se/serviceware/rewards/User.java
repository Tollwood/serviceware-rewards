package se.serviceware.rewards;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Transient;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class User {
    @Id
    private String username;
    @Transient
    private int xp;
    @Transient
    private Rank rank;
    private String pictureUrl;
}
