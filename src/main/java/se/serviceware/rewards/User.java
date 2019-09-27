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
    private String pictureUrl = "https://live.staticflickr.com/4034/4410923630_6d8aaa409e.jpg";
}
