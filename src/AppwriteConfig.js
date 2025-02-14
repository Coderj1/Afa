import { Client, Account, Databases} from 'appwrite'

const client = new Client()

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("67a5d0d7002c5d304c51")
export const account = new Account(client)
export const databases = new Databases(client)