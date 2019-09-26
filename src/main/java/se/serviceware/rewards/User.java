package se.serviceware.rewards;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User {
    @Id
    private String username;
    private long xp;
    private long xpNext;
    private long xpPrev;
    private String rank;
    private String pictureUrl;

    public User() {

    }

    public User(String username, long xp, long xpNext, long xpPrev, String rank, String pictureUrl) {
        this.username = username;
        this.xp = xp;
        this.xpNext = xpNext;
        this.xpPrev = xpPrev;
        this.rank = rank;
        this.pictureUrl = pictureUrl;
    }

    public long getXp() {
        return xp;
    }

    public void setXp(long xp) {
        this.xp = xp;
    }

    public long getXpNext() {
        return xpNext;
    }

    public void setXpNext(long xpNext) {
        this.xpNext = xpNext;
    }

    public long getXpPrev() {
        return xpPrev;
    }

    public void setXpPrev(long xpPrev) {
        this.xpPrev = xpPrev;
    }

    public String getRank() {
        return rank;
    }

    public void setRank(String rank) {
        this.rank = rank;
    }

    public String getPictureUrl() {
        return pictureUrl;
    }

    public void setPictureUrl(String pictureUrl) {
        this.pictureUrl = pictureUrl;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
