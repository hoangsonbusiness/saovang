function getSeq(name) {
    return new Promise((resolve, reject) => {
        let Counter = require('../model/Counter');
        var promise1 = new Promise((resolve, reject) => {
            let seq = -1;
            let body = {
                _id: name
            }
            Counter.findOne(body)
                .exec((err, result) => {
                    if (err) reject("Error get seq");

                    seq = result.seq + 1;
                    resolve(seq);
                })
        });

        promise1.then(data => {
            Counter.findOneAndUpdate({ _id: name }, { $set: { seq: data } },
                function(err, rs) {
                    if (err) {
                        console.log("update auto increse error");
                        reject("error")
                    } else {
                        console.log("update auto increse success");
                        resolve(data);
                    }
                });
        })
    })
}

module.exports = getSeq;