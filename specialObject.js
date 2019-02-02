const v8n = require('v8n');

module.exports = v8n().schema({
    id:v8n().number().positive(),
    site:v8n().schema({
        name:v8n().string().not.empty(),
        sections:v8n().array().every.schema({
            id:v8n().number(),
            title:v8n().string(),
            description:v8n().string()
        })
    })
});