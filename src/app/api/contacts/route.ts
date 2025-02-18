// Importar dependencias
import { NextRequest, NextResponse } from 'next/server';
import Airtable from 'airtable';
import { StatusCodes } from 'http-status-codes';

if (!process.env.DB_API_KEY || !process.env.DB_BASE_ID) {
  throw new Error('Missing Airtable configuration');
}

const base = new Airtable({ apiKey: process.env.DB_API_KEY }).base(process.env.DB_BASE_ID);

export async function POST(req: NextRequest) {
    try {
      const contactRequest = await req.json();
      await base('wait-list').create({
        name: contactRequest.name,
        phone: '-',
        email: contactRequest.email
      });
      return NextResponse.json({ status: StatusCodes.CREATED });
    } catch (error) {
        console.error('Error saving data:', error);
        return NextResponse.json({status:StatusCodes.INTERNAL_SERVER_ERROR})   
    }
  }