package se.serviceware.rewards;

public class User {
    private final long xp;
    private final long xpNext;
    private final long xpPrev;
    private final int rank;

    public User(long xp, long xpNext, long xpPrev, int rank) {
        this.xp = xp;
        this.xpNext = xpNext;
        this.xpPrev = xpPrev;
        this.rank = rank;
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

    public int getRank() {
        return rank;
    }
}
