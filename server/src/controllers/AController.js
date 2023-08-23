module.exports = {

    //que1
    create(req, res) {
        res.send(
            "บวกเลข : " +
            req.params.NumId +
            " คือ : " +
            JSON.stringify(req.body)
        );
    },
    //que2
    post(req, res) {
        res.send(
            "ครน. : " +
            req.params.NumId +
            " คือ : " +
            JSON.stringify(req.body)
        );
    },
};