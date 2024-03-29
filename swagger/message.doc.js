//get all messages swagger documentation
const listOfAllMessages = {
    tags: ["Messages"],
    description: "list of all Messages",

    security: [
        {
            token: [],
        },
    ],
    responses: {
        200: {
            description: "OK",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        example: {
                            _id: "63c5554511120c1b217b1d31",
                            name: "nelly",
                            Email: "nelly@gmail.com",
                            message: "niceeeeee",
                            __v: 0,
                        },
                    },
                },
            },
        },
    },
};
//create a blog swagger documentation

const createmessage = {
    tags: ["Messages"],
    description: "create a new message",

    requestBody: {
        content: {
            "Application/json": {
                schema: {
                    type: "object",
                    properties: {
                        name: {
                            type: "string",
                            description: "name",
                            example: "Nelly",
                        },

                        email: {
                            type: "string",
                            description: "email",
                            example: "nelly@gmail.com",
                        },
                        subject: {
                            type: "string",
                            description: "email",
                            example: "compliment",
                        },
                        message: {
                            type: "string",
                            description: "message",
                            example: "Learning",
                        },
                    },
                },
            },
        },
        responses: {
            200: {
                description: "OK",
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            example: {
                                _id: "63ccde6635bde581af696708",
                                name: "Nelly",
                                Email: "nellya@gmail.com",
                                subject:"compliment",
                                message: "dancing",
                            },
                        },
                    },
                },
            },
        },
    },
};

//get single blog by id swagger documentation
const getonemessage = {
    tags: ["Messages"],
    summary: "get user by path id",
    description: "get single message by id",

    security: [
        {
            token: [],
        },
    ],
    parameters: [
        {
            name: "id",
            in: "path",
            description: "id of the user",
            type: "string",
            example: "hfbjsd2345njndfjhcbe3",
        },
    ],
    responses: {
        200: {
            description: "OK",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                    },
                },
            },
        },
        404: {
            description: "message not found",
        },
    },
};
const messageRouteDoc = {
    "/api/userMessages": {
        post: createmessage,
    },
    "/api/userMessages/": {
        get: listOfAllMessages,
    },
    "/api/userMessages/getOne": {
        get: getonemessage,
    },
};

module.exports = messageRouteDoc;
