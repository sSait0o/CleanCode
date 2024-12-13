public class Exercise3 {
   /**
    *
    * @param amount price
    * @param type Account status (NotRegistered = 1, SimpleCustomer = 2, ValuableCustomer = 3, MostValuableCustomer = 4)
    * @param years Time in years that the client is our customer
    * @return THE PRICE
    */
   public double calculate(double amount, int type, int years) {
       double result = 0;
       double disc = (years > 5) ? (double) 5 / 100 : (double) years / 100;

       //switch est mieux que les if et les else (jsp comment faire filter()) 
       switch (type) {
           case 1: 
               result = amount;
               break;
           case 2: 
               result = (amount - (0.1 * amount)) - disc * (amount - (0.1 * amount));
               break;
           case 3:
               result = (0.7 * amount) - disc * (0.7 * amount);
               break;
           case 4: 
               result = (amount - (0.5 * amount)) - disc * (amount - (0.5 * amount));
               break;
           default:
               throw new IllegalArgumentException("Invalid account type: " + type);
       }

       return result;
   }
}
