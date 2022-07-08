package DP_JAVA.USE;

import DP_JAVA.Decorator;

public class DecoratorIMP {
    // Create an instance of the object that gonna receive the changes
    Decorator dec;

    public DecoratorIMP(Decorator dec) {
        this.dec = dec;
    }

    // Call the same methods and add the new values
    public double getCost() {
        return this.dec.getCost() + 1;
    }
    
    public String getIngredients() {
        return this.dec.getIngredients() + "Milk";
    }
}
