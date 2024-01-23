// axios -> js library for calling any RESTFul API
import axios from "axios";

// We need 4 information - URL, UserName, API Key, Project Key
const url = "https://2023-bootcamp.atlassian.net/rest/api/2/issue/"
const username = "hari@testleaf.com"
const apiKey = "ATATT3xFfGF0cxPe9amm2Eh2povMKFdeArlU0Fb_VIFH7Qh3lYf73V0lLmXTdpsbteIGFH6f9eBYOPJ91gUTSf562osZ0TyPgIFF_WfVnFbYD-D0brV5dwBBQNgXtvq_9qA93uvejQXu5lkAzGSfn-BEd_alGxsGxmrI5n6KHjlqU7urNqlVKcE=265CCF24"
const projectId = "S10"

async function createJiraIssue(summary: string, description: string) {
    // Body // Payload
    const issueRequestJson = {
        "fields": {
           "project":
           {
              "key": projectId
           },
           "summary": summary,
           "description": description,
           "issuetype": {
              "name": "Bug"
           }
       }
    };

    // Send a Post Request
    axios.post(url, issueRequestJson,{
        auth: {
            username: username,
            password: apiKey
        },
        headers:{
            'Content-Type': 'application/json'
        }
    })

    console.log("The API request is successful")
}

export {createJiraIssue}