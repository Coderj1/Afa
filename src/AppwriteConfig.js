import { Client, Account, Storage, Databases} from 'appwrite'

const client = new Client()

client.setEndpoint("https://cloud.appwrite.io/v1")
.setProject("67a5d0d7002c5d304c51")


export const account = new Account(client)

//Database

export const databases = new Databases(client)

export const storage = new Storage(client)