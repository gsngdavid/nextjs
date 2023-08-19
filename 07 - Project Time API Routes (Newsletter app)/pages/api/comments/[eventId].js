function eventCommentHandler(req, res) {
    if(req.method === 'POST') {
        const { email, name, message } = req.body;
        if(!email || !name || !message || !email.includes('@') || email.trim() === '' || name.trim() === 0 ) {
            res.status(201).json({message: "Invalid input."});
            return;
        }

        const commentData = { id: new Date().toISOString(), email, name, message };
        console.log(commentData);
        res.status(200).json({message: "Success!", comment: commentData});
    }
    else {
        const comments = [
            {id: '1', message: 'Comment 1', name: 'Denis'}, {id: '2', message: 'Comment 2', name: 'David'}
        ];
        res.status(200).send(JSON.stringify(comments));
    }
}

export default eventCommentHandler;