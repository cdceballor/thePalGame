package DP_JAVA.USE;

import DP_JAVA.Singleton;

public class SingletonIMP {
    public static void main(String[] args) {
        Singleton s = Singleton.getInstance(1);
        System.out.println(s);
    }
}
