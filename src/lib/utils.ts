import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type ContactFormData = {
  name: string;
  phone: string;
  email: string;
};

export default async function saveContactForm(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { name, phone, email }: ContactFormData = req.body;

  if (!name || !phone || !email) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  try {
    const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID as string;
    const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME as string;
    const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY as string;

    const response = await axios.post(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
      {
        records: [
          {
            fields: { name, phone, email },
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return res.status(200).json({ success: true, data: response.data });
  } catch (error: any) {
    return res.status(500).json({ error: 'Error al registrar en Airtable', details: error.response?.data || error.message });
  }
}
