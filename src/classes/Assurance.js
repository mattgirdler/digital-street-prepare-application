require('./Consent')
require('./Certificate')

class Assurance {
    entryCodes = {

    }

    constructor(titleNo, entryCode, party = '') {
        this.titleNo = titleNo
        this.entryCode = entryCode
        this.party = party
        this.resolution = this.generateAssuranceSchema();
    }

    generateAssuranceSchema() {
        
    }
}