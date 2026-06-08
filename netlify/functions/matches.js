exports.handler = async () => {
    const res = await fetch(process.env.API_URL);
    const data = await res.json();
    return {
        statusCode: 200,
        body: JSON.stringify(data),
        headers: { 
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    };
};