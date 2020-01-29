require('../Consent')
require('../CourtOrder')
require('../Entry')

class OJPR extends Entry {
    constructor(applicants, applicationTypes, entry, proprietors) {
        super(applicants, applicationTypes, entry, proprietors)
        this.resolutions = this.generateResolutions()
    }

    // Generate a list of potential assurances that a user can provide to resolve the restriction
    generateResolutionSchema() {
        let resolutions = []
        if (this.applicationTypes.includes('transfer for value')) {
            // If more than one proprietor, require them to all join in the transfer
            if (this.proprietors > 1) {
                for (proprietor in this.proprietors) {
                    resolutions.push(new Consent(this.proprietors['proprietor']))
                }
            }
            // Alternatively, the user can provide a court order to resolve the restriction
            resolutions.push(new CourtOrder())
        } 
    }
}


OJPR.prototype.toString = function() {
    return JSON.stringify({
        "sub_register_code": this.subRegisterCode,
        "sub_register_sequence": this.subRegisterSeq,
        "role_code": this.roleCode,
        "entry_text": this.entryText,
        "resolutions": this.resolutions
    })
}

exports.OJPR = OJPR