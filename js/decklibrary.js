var deck = {

    cardArray: [],
    load: function() {
        let count = 0;
        for (i = 1; i <= 4; i++) {
            for (j = 2; j <= 14; j++) {
                this.cardArray[count] = new Card(i,j);
                count++;
            }
        }
    },

    //let card = new Card(this.rank[j],this.suits[i]);
    shuffle: function() {
        //using the Fisher-Yates shuffle algorithm, 'cause why reinvent the wheel? I'm not sure I could reinvent it, anyways...
        //this will make it a bit faster to randomly deal 26 cards to each player
        //if I shuffle the deck, then I can just deal the first 26 cards to one player, and the second 26 cards to the other,
        //instead of randomly selecting cards from the unshuffled deck and trying to avoid handing out repeats...
        let j,temp;
        for (i = this.cardArray.length-1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = this.cardArray[i];
            this.cardArray[i] = this.cardArray[j];
            this.cardArray[j] = temp;
        } //goddammit, apparently somebody else in the class figured out this was the optimal way and turned it in before me.
    }     //this is what I get for being lazy
};