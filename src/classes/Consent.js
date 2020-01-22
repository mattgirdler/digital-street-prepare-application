class Consent {
    constructor(titleNo, party=null){
        this.titleNo = titleNo;
        this.party = party;
        this.sig = null;
    }

    signConsent(signature) {
        this.sig = signature;
    } 

    setParty(partyName) {
        this.party = partyName;
    }
}

exports.Consent = Consent;