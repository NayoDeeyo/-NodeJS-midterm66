module.exports = {

    //que1
    post(req, res) {
        res.send(
            "บวกเลข : " +
            req.params.userId +
            " : " +
            JSON.stringify(req.body)
        );
    },
    //que2
    post(req, res) {
        res.send(
            "ครน. : " +
            req.params.userId +
            " : " +
            JSON.stringify(req.body)
        );
    },
};