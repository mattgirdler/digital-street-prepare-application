const Evidence = require('./Evidence')

const helpText = "Please provide assurance that consent has been provided by the party."

class Consent extends Evidence {
    constructor(party, evidence = null){
        super('consent', evidence, helpText)
        this.party = party
    }
}

module.exports = Consent