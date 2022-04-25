import {db} from '../../utils/firebase';
import {collection, getDocs, addDoc, query, orderBy} from 'firebase/firestore';
import { async } from '@firebase/util';

export async function getCompanyNames(){
    const companyRef = collection(db, 'company');
    const companyDetails = await getDocs(companyRef);

    const names = []
    companyDetails.docs.map((doc=>{
        const map = {
            'name': doc.data().name,
            'count':doc.data().problems.length,
            'id': doc.id
        }
        
        names.push(map);
    }))

    return names;
}

export async function getCompanyQuestions(id){
    const companyRef = collection(db,'company');

    const data = await getDocs(companyRef);

    var companyQues=[];
    data.docs.map((doc)=>{
        if(doc.id==id){
            companyQues = doc.data().problems
        }
    })
    return companyQues;
}

export async function getExperiences(){
    const expRef = collection(db,"Experience");
    const q = query(expRef, orderBy('year','desc'))
    const data = await getDocs(q);
    const exp = []
    data.docs.map((doc)=>{
        const d = doc.data();
        d['id'] = doc.id;
        exp.push(d);
    })

    return exp;
}

export default async function handler(req, res){
    if(req.method==='POST'){
        const data = req.body;
        const expColRef = collection(db, 'Experience');
        try{await addDoc(expColRef, req.body);}catch(e){
            res.status(404).send('Failed to add data')
            return
        }
        res.status(201).send('Send data Successfully')
        res.end();
        return
    }
    else{
        res.status(404).send("This is not a valid HTTP request")
        return;
    }
}