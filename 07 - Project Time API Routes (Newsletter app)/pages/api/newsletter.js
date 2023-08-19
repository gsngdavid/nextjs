function newsletterHandler(req, res) {
    if(req.method === 'POST') {
        const email = req.body;
        console.log(email);
        res.status(200).send(JSON.stringify({message: 'Success!'}));
    }
}

export default newsletterHandler;