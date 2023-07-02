import { getDocs, addDoc, collection } from "firebase/firestore";
import { getDb } from './db.mjs'

const collection_name = "packages"

export const create = args => addDoc(collection(getDb(), collection_name), args)

export const findAll = async () => {
    const doc_refs = await getDocs(collection(getDb(), collection_name))

    const res = []

    doc_refs.forEach(item => {
        res.push({
            id:item.id,
            ...item.data()
        })
    })

    return res
}