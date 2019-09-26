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
    @Builder.Default
    private String pictureUrl = "https://farm4.staticflickr.com/3247/2765310447_9490cb6780_m.jpg";
}
