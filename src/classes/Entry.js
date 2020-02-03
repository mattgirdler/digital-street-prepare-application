class Entry {
    constructor(subRegisterCode, subRegisterSequence, roleCode, entryText) {
        this.subRegisterCode = String(subRegisterCode)
        this.subRegisterSeq = parseInt(subRegisterSequence)
        this.roleCode = String(roleCode)
        this.entryText = String(entryText)
    }
}

module.exports = Entry