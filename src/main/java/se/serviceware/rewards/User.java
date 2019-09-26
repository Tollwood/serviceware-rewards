package se.serviceware.rewards;

public class User {
    private final long xp;
    private final long xpNext;
    private final long xpPrev;
    private final String rank;
    private final String pictureUrl;

    public User(long xp, long xpNext, long xpPrev, String rank, String pictureUrl) {
        this.xp = xp;
        this.xpNext = xpNext;
        this.xpPrev = xpPrev;
        this.rank = rank;
        this.pictureUrl = pictureUrl;
    }

    public long getXp() {
        return xp;
    }

    public long getXpNext() {
        return xpNext;
    }

    public long getXpPrev() {
        return xpPrev;
    }

    public String getRank() {
        return rank;
    }

    public String getPictureUrl() {
        return pictureUrl;
    }
}
