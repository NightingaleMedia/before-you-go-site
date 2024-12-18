// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
'use-strict'
import type { NextApiRequest, NextApiResponse } from 'next'
import { google } from 'googleapis'
const pathToKey = 'creds.json'
type Data = {
  data?: any
  message?: any
}

const auth = new google.auth.GoogleAuth({
  keyFile: `${pathToKey}`,
  scopes: [
    'https://www.googleapis.com/auth/spreadsheets',
    'https://www.googleapis.com/auth/gmail',
    'https://mail.google.com/',
    'https://www.googleapis.com/auth/gmail.modify',
    'https://www.googleapis.com/auth/gmail.compose',
    'https://www.googleapis.com/auth/gmail.send',
  ],
})
const ID = '1g8N0Sp3bLGiQIYzuNLgeWW3OBDcRWgQEFK6ZEyYZkEg'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    return res.status(200).json({ data: 'hello' })
  } catch (error) {
    res.status(400).json({ message: error })
  }
}
