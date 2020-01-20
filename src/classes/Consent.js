class Consent {
    constructor(titleNo, party=null, sig=null) {
        this.titleNo = titleNo;
        this.party = party;
        this.sig = sig;
    }

    signConsent(signature) {
        this.sig = signature
    } 
}