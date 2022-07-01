const envelopes = [];

class Envelope {

    _id;
    _title;
    _budget;

    static _envelopeIdCounter = 1;
    static generateEnvelopeId() {
        return Envelope._envelopeIdCounter++;
    }


    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }


    get budget() {
        return this._budget;
    }
    set budget(value) {
        this._budget = value;
    }


    constructor(title, budget) {
        this._id = Envelope.generateEnvelopeId();
        this.title = title;
        this.budget = budget;
    }
    
}

module.exports.envelopes = envelopes;
module.exports.Envelope = Envelope;


/*
// tester methods
console.log('---- jocow: ========== START TESTS db.js ==========');
console.log('---- jocow: Start database:');
console.log(envelopes);
console.log('---- jocow: create 2 objects');
const env1 = new Envelope('Pet care', 50);
const env2 = new Envelope('Groceries', 75);
console.log('---- jocow: log 2 objects');
console.log(env1);
console.log(env2);
console.log('---- jocow: add to database');
envelopes.push(env1);
envelopes.push(env2);
console.log('---- jocow: log database');
console.log(envelopes);
console.log('---- jocow: ========== END TESTS ==========');
*/