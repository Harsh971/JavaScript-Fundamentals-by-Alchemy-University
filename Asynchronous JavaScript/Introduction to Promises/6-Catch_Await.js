const { getResults } = require('./lab');
const { sendResults } = require('./messaging');
const { logResponse, logError } = require('./logs');

async function handleResults(patientId) {
    try {
        const results = await getResults(patientId);
        const response = await sendResults(patientId,results);
        await logResponse(response);
    }catch(ex) {
        logError(ex)
    }
}

module.exports = handleResults;