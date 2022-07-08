// Only one instance to coordinate actions in the system
// A Singleton is a pattern that help us to use only one object when we need to shared with others, for example:
// With databases clients, AWS services, or whatever object that only need to be instanced one time

package DP_JAVA;

public class Singleton {
    
    //Create the instance that gonna be instanced
    public static final Singleton INSTANCE = new Singleton(2);
    public int val;
    // Create constructor private
    private Singleton(int val) {
        this.val = val;
    }

    // Create method that gonna be used to instantiate the instance
    public static Singleton getInstance(int value) {
        if (value==2) {
            return INSTANCE;
        }
        else {
            return null;
        }
    }
}