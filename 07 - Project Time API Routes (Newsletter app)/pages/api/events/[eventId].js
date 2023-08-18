function eventCommentHandler(req, res) {
    if(req.method === 'POST') {
        console.log(req.body);
        res.status(200).send(JSON.stringify({message: "Success!"}));
    }
    else {
        const comments = [
            {id: '1', message: 'Comment 1', name: 'Denis'}, {id: '2', message: 'Comment 2', name: 'David'}
        ];
        res.status(200).send(JSON.stringify(comments));
    }
}

export default eventCommentHandler;