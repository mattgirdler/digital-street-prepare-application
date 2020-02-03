const Consent = require('../Consent')
const CourtOrder = require('../CourtOrder')
const Entry = require('../Entry')
const Evidence = require('../Evidence')

class OJPR extends Entry {
    constructor(entry) {
        super(entry['sub_register_code'], entry['sub_register_sequence'], entry['role_code'], entry['entry_text'])
        this.options = []
    }

    // Generate a list of potential assurances that a user can provide to resolve the restriction
    generateResolutionSchema(applicationTypes, proprietors) {
        if (applicationTypes.includes('transfer for value')) {
            if (proprietors.length > 1) {
                // If more than one proprietor, require them to all join in the transfer
                this.requireAllProprietorsConsent(proprietors)
                // If all proprietors haven't signed, provide evidence of non-involvement
                this.requireSomeProprietorsAndEvidenceOfNonInvolvement(proprietors)
            } else {
                this.requireCourtOrder()
            }
        } else {
            this.options = ["No assurances required"]
        }
    }

    requireAllProprietorsConsent(proprietors) {
        let schema = {'allOf': []}
        for (let proprietor in proprietors) {
            schema['allOf'].push(new Consent(proprietors[proprietor]))
        }
        this.options.push(schema)
    }

    requireSomeProprietorsAndEvidenceOfNonInvolvement(proprietors) {
        let schema = {'anyOf': [], 'allOf': []}
        for (let proprietor in proprietors) {
            schema['anyOf'].push(new Consent(proprietors[proprietor]))
        }
        schema['allOf'].push(new Evidence('non-involvement', null, "Please provide evidence of non-involvement for the non-consenting parties."))
        schema['allOf'].push(new CourtOrder())
        this.options.push(schema)
    }

    requireCourtOrder() {
        let schema = {'allOf': []}
        schema.allOf.push(new CourtOrder())
        this.options.push(schema)
    }

    requireAppointedParty() {
        let schema = {'anyOf': [], 'allOf': []}
        for (let proprietor in proprietors) {
            schema['anyOf'].push(new Consent(proprietors[proprietor]))
        }
        schema['allOf'].push(new Evidence('non-involvement', null, "Please provide evidence of non-involvement for the non-consenting parties."))
        schema['allOf'].push(new Evidence('appointed party', null, "Please provide evidence that the proprietor has appinted someone to sell with them."))
    }
}

module.exports = OJPR