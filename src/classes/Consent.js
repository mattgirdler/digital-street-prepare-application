require('./Evidence')

class Consent extends Evidence{
    constructor(party, evidence = null){
        super('consent or evidence', evidence)
        this.party = party
    }
}

Consent.prototype.toString = function() {
    return JSON.stringify({
        "party": this.party,
        "evidence": this.evidence,
        "help_text": "Please provide assurance that consent has been provided by the party, or evidence of their non-involvement."
    })
}

exports.Consent = Consent;