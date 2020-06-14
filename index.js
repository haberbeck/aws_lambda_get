exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from AWS Haberbecks Lambda!'),
    };
    return response;
};
