export type AmplifyDependentResourcesAttributes = {
    "function": {
        "myorderLambda": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "myorderLambdaApiRest": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}