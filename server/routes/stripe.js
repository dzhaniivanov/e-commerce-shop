const router = require("express").Router();
const stripe = require("stripe")("sk_test_51IXlvoIssDitHYfkOQ7eJpVbAvBU1E1VtZ72aqlAJdBhgmr5Z3vOP97O8VqlpmJ5tC6CUgts0jd36YOf2KWqNZX900eXH7exG5");


router.post("/payment", (req, res) => {
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd",
    }, (stripeError, stripeResponse) => {
        if (stripeError) {
            res.status(500).json(stripeError);
        } else {
            res.status(200).json(stripeResponse);
        }
    });
});



module.exports = router;