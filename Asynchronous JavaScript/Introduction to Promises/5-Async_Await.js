const { getResults } = require('./lab');
const { sendResults } = require('./messaging');
const { logResponse, logError } = require('./logs');

async function handleResults(patientId) {
        const results = await getResults(patientId);
        const response = await sendResults(patientId,results);
        await logResponse(response);
}

module.exports = handleResults;