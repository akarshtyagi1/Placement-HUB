import { getSession } from "next-auth/react";

export default async function handler(req, res){
    if(req.method === 'POST'){
        const session = await getSession({req})
        if(session){
            const user = JSON.stringify(session.user);
            res.status(200).json(session.user);
            return;
        }
        res.status(201).send(null);
        return;
    }
    else{
        res.status(405).send('<h1>This HTTP method is not allowed</h1>');
    }
}    