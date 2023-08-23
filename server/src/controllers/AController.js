module.exports = {

    //que1
    create(req, res) {
        res.send(
            "บวกเลข : " +
            JSON.stringify(req.body)
        );
    },
    //que2
    post(req, res) {
        res.send(
            "ครน. : " +
            JSON.stringify(req.body)
        );
    },
};