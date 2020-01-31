const Evidence = require('./Evidence')

class CourtOrder extends Evidence {
    constructor(evidence = null) {
        super('court order', evidence)
        this.helpText = "Please provide a court order in proceedings to which the relevant proprietor is or has been a party, where the interest is claimed to have arisen from that order or where the order declares the validity of the interest"
    }
}

CourtOrder.prototype.toString = function() {
    return JSON.stringify({
        "type": this.type,
        "evidence": this.evidence,
        "help_text": this.helpText
    })
}

module.exports = CourtOrder;