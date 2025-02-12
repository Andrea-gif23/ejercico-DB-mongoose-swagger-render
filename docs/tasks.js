module.exports = {
    "/tasks": {
        get: {
            summary: "Get all tasks",
            responses: {
                200: {
                    description: "A list of tasks",
                    content: {
                        "application/json": {
                            schema: {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/Task"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};
