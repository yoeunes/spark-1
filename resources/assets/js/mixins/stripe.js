module.exports = {
    /**
     * The mixin's data.
     */
    data() {
        return {
            stripe: Stripe(Spark.stripeKey)
        }
    },


    methods: {
        /**
         * Create a Stripe Card Element.
         */
        createCardElement(container){
            var card = this.stripe.elements().create('card', {
                hideIcon: true,
                hidePostalCode: true,
                style: {
                    base: {
                        '::placeholder': {
                            color: '#aab7c4'
                        },
                        fontFamily: 'Whitney, Lato, -apple-system, BlinkMacSystemFont,"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji","Segoe UI Emoji", "Segoe UI Symbol"',
                        color: '#495057',
                        fontSize: '1.07rem'
                    }
                }
            });

            card.mount(container);

            return card;
        }
    },
};
