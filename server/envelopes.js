const envelopesRouter = require('express').Router();
const db = require('./db.js');

module.exports = envelopesRouter;

envelopesRouter.post('/', (req, res, next) => {
    //console.log('---- jocow: in POST');
    const envelope = new db.Envelope(req.body.title, req.body.budget);
    db.envelopes.push(envelope);
    res.status(201).send(envelope);
});

envelopesRouter.get('/', (req, res, next) => {
    //console.log('---- jocow: in GET');
    res.status(200).send(db.envelopes);
});

envelopesRouter.param('envelopeId', (req, res, next, id) => {
    const envelope = db.envelopes.find((element) => {
        return element.id === parseInt(id);
    });
    if (envelope) {
      req.envelope = envelope;
      next();
    } else {
        res.status(404).send();
    }

});
  
envelopesRouter.get('/:envelopeId', (req, res, next) => {
    //console.log('---- jocow: in get/id');
    res.send(req.envelope);
});

envelopesRouter.put('/:envelopeId', (req, res, next) => {
    //console.log('---- jocow: in PUT');

    /* ALSO WORKS: changed by reference - even in array 
    req.envelope.title  = req.body.title;
    req.envelope.budget = req.body.budget;
    res.send(req.envelope); */

    const changedEnvelope = req.envelope; 
    changedEnvelope.title  = req.body.title;
    changedEnvelope.budget = req.body.budget;

    const instanceIndex = db.envelopes.findIndex((element) => {
        return element.id === parseInt(req.envelope.id);
    });

    if (instanceIndex > -1) {
        db.envelopes[instanceIndex] = changedEnvelope;
        res.send(db.envelopes[instanceIndex]);
    } else {
        res.status(500);
    }
    
    res.status(500);  
});

envelopesRouter.delete('/:envelopeId', (req, res, next) => {

    const instanceIndex = db.envelopes.findIndex((element) => {
        return element.id === parseInt(req.envelope.id);
    });

    if (instanceIndex > -1) {
        //db.envelopes[instanceIndex] = changedEnvelope;
        db.envelopes.splice(instanceIndex, 1);
        res.send(true).status(204);
    } else {
        res.status(500);
    }
    
    res.status(500);  

  });


/*  ----------------- NOT WORKED OUT YET: transfer -------------------------

router.post('/:fromId/transfer/:toId', transfer);

*/

